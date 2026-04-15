import { useState, useContext } from "react";
import { loginUser } from "../api/Auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {styled, createGlobalStyle} from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setUser, setPurchased, setNotPurchased, setUserID } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const data = await loginUser(email, password);

      if (data.access_token) {
        setToken(data.access_token);
        setUser(data.username)
        setPurchased(data.purchased)
        setNotPurchased(data.notPurchased)
        console.log("userid from login"+data.userID)
        setUserID(data.userID)
        navigate('/home')
      } else {
        alert("Invalid login");
      }
    } catch (err) {
      console.error(err);
      alert("Error logging in");
    }
  };

  return (
    <>
    <GlobalDesign/>
      <TagDesign>
        <div className="tag">
        <h1>Welcome To <span>MYHOGRA</span></h1>
        <h3>Buy Groceries Without Miss Anything</h3>
      </div>
      </TagDesign>
      <LoginDesign>
        <div className="logoutcnt">
          <div className="login">
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Enter Your Email(eg:sample@gmail.com)"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
          <h5>
            <a href="#">Create new account</a><br />
            <a href="#">Forgot password</a>
          </h5>
          </div>
        </div>
      </LoginDesign>
    </>
  );
};
const GlobalDesign = createGlobalStyle`
  body{
    background-color: #389c9a;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const LoginDesign = styled.div`
--color-first : #389c9a;
--color-second:orange;
  .login{
    width: 80%;
    height: 300px;
    padding:5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    align-self: center;
    background-color: white;
    color: #389c9a;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
  }
  button{
    width: 70%;
    padding: 2%;
    margin: 3%;
    border: none;
    outline: none;
    background-color: #389c9a;
    color: white;
    font-weight:bold;
    border-radius: 20px;
  }
  input{
    width: 90%;
    margin: 3%;
    padding: 2%;
    font-size: 1rem;
    border-top: none;
    border-left: none;
    border-right: none;
    outline-color: #FED871;
  }
  .logoutcnt{
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
const TagDesign = styled.div`
  .tag{
    width: 100%;
    text-align: center;
    padding: 2%;
    margin-top: 5%;
    margin-bottom: 5%;
    font-family: Arial, Helvetica, sans-serif;
  }
  h1{
    color: white;
  }
  h1 span{
    color:#FED871
  }
  h3{
    color: #152f2f;
  }
`
export default Login;