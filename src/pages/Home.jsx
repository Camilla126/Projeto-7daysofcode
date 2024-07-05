import {App} from "../layout/App"
import "./index"
import {useState} from "react"

export const Home = () => {
  const[user,setUser] = useState({
    email:"",
password: "",
  });

  const handleChange= (event) =>{
    setUser({...user,
        [event.target.email]:
event.target.value})
  };

  return (
 
    <App>
    <> <h1 className="text-xl text-sky-600">Home</h1>
    <form>
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
    </form> 
    </> 
    </App>
);
}
export default App
