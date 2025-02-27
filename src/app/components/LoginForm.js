
export function LoginForm({ saludo, usuario, contrasena, onSetUsuario, onSetContrasena }) {
  return (
    <form>
      <h1>{saludo}</h1>
      <input type="email" placeholder="Email"
        value={usuario}
        onChange={(e) => onSetUsuario(e.target.value)} />
      <input type="password" placeholder="Password"
        value={contrasena}
        onChange={(e) => onSetContrasena(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  )
}