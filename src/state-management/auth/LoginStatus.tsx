// import { useContext, useReducer, useState } from "react";
// import authReducer from "./reducers/authReducer";
// import AuthContext from "./contexts/authContext";
// import useAuth from "./hooks/useAuth";
import useAuthStore from "./store";
import useAuth from "./useAuth";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  // const [user, dispatch] = useReducer(authReducer, "");

  // const {user, dispatch} = useContext(AuthContext);

  // const {user, dispatch} = useAuth();

  const {user, login, logout} = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          {/* <a onClick={() => setUser('')} href="#"> */}
          {/* <a onClick={() => dispatch({ type: 'LOGOUT'})} href="#"> */}
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      {/* <a onClick={() => setUser('oykun.yanilmaz')} href="#"> */}
      {/* <a onClick={() => dispatch({ type: 'LOGIN', username: 'oykun.yanilmaz' })} href="#"> */}
      <a onClick={() => login("oykun.yanilmaz")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
