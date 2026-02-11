import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../lib/firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function handleEmailLogin(e) {
    e.preventDefault();
    setErr("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      nav("/perfil");
    } catch (e) {
      setErr("No pudimos iniciar sesión. Revisá email y contraseña.");
    }
  }

  async function handleGoogle() {
    setErr("");
    try {
      await signInWithPopup(auth, googleProvider);
      nav("/perfil");
    } catch (e) {
      setErr("No pudimos iniciar sesión con Google.");
    }
  }

  return (
    <div className="auth">
      <h1>Iniciar sesión</h1>

      <button type="button" onClick={handleGoogle}>
        Continuar con Google
      </button>

      <div style={{ margin: "12px 0" }}>o</div>

      <form onSubmit={handleEmailLogin}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Contraseña" type="password" />
        {err && <p>{err}</p>}
        <button type="submit">Entrar</button>
      </form>

      <p>
        ¿No tenés cuenta? <Link to="/register">Crear cuenta</Link>
      </p>

      <p>
        ¿Querés seguir sin cuenta? <Link to="/tienda">Ir a la tienda</Link>
      </p>
    </div>
  );
}
