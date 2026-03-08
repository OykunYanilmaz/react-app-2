import { ReactNode, useReducer } from "react";
// import authReducer from "./authReducer";
import AuthContext from "./authContext";

export type AuthAction =
  | { type: 'LOGIN'; username: string }
  | { type: 'LOGOUT'; };

const authReducer = (state: string, action: AuthAction): string => {
    switch (action.type) {
        case 'LOGIN':
            return action.username;
        case 'LOGOUT':
            return "";
        default:
            return state;
    }
}

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
