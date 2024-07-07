import { App } from "../layout/App"
import { useState } from "react"


export const PaginaDeCadastro = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.email]:
        event.target.value
    })
  };


  return (

    <App>
      <>
<div className="layout">

        <h1 className="cadastro_titulo">Aluritter</h1>

        <form className="cadastro_form" >
          <div className="cadastro_links">
          <input 
            onChange={handleChange}
            value={user.email}
            placeholder="email@exemplo.com"
            name="email"
          />

          <input 
            onChange={handleChange}
            value={user.password}
            placeholder="Senha"
            name="password"
          />
</div>
          <button className="cadastro_button" >Acessar plataforma</button>

        </form>

        <span className="cadastro_span">Já possui uma conta? Acesse agora!</span>

</div>
      </>
    </App>
  );
}
export default App
