import { useEffect, useState, type FormEvent, type ReactNode } from "react";

export function HqGate({ children }: { children: ReactNode }) {
  const [state, setState] = useState<"loading" | "in" | "out">("loading");
  const [configured, setConfigured] = useState(true);

  useEffect(() => {
    let alive = true;
    fetch("/api/hq-session", { credentials: "same-origin" })
      .then((r) => r.json())
      .then((d) => {
        if (!alive) return;
        setConfigured(d.configured !== false);
        setState(d.ok ? "in" : "out");
      })
      .catch(() => {
        if (alive) setState("out");
      });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow, noarchive";
    document.head.appendChild(meta);
    return () => {
      meta.remove();
    };
  }, []);

  if (state === "loading") {
    return (
      <div className="hq-lock">
        <p className="muted">Tikrinama prieiga…</p>
      </div>
    );
  }
  if (state === "out") {
    return <HqLogin configured={configured} onIn={() => setState("in")} />;
  }
  return <>{children}</>;
}

function HqLogin({ configured, onIn }: { configured: boolean; onIn: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/hq-login", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 503 || data.error === "not_configured") {
        setError("HQ slaptažodis serveryje nenustatytas. Vercel → Environment Variables → HQ_PASSWORD.");
        return;
      }
      if (res.status === 429) {
        setError("Per daug bandymų. Palaukite 15 minučių.");
        return;
      }
      if (!res.ok || !data.ok) {
        setError("Neteisingas slaptažodis.");
        return;
      }
      onIn();
    } catch {
      setError("Nepavyko prisijungti. Paleiskite svetainę iš naujo.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="hq-lock">
      <form className="hq-login" onSubmit={onSubmit}>
        <div className="kicker">Privatu</div>
        <h1>HQ</h1>
        <p className="muted">Tik savininkui. Čia nėra vitrinos.</p>
        {!configured ? (
          <p className="notice">Nustatykite HQ_PASSWORD aplinkoje, kitaip pultas lieka uždarytas visiems.</p>
        ) : null}
        <label htmlFor="hq-pass">Slaptažodis</label>
        <input
          id="hq-pass"
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoFocus
        />
        {error ? <p className="hq-login-error">{error}</p> : null}
        <button className="btn btn-ink" type="submit" disabled={busy}>
          {busy ? "Tikrinama…" : "Įeiti"}
        </button>
      </form>
    </div>
  );
}

export async function hqLogout() {
  await fetch("/api/hq-logout", { method: "POST", credentials: "same-origin" });
  window.location.href = "/";
}
