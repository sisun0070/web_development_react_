import { useContext } from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";
import Context from "./context/Context";

function App() {
  const { state, dispatch } = useContext(Context);


  return (
    <div>
      {state.isLogin ? (
        <>
          <strong>Welcome user 🤓</strong>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>Sign Out</button>
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
        </div>
  );
}

export default App;
