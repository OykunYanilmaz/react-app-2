type AuthAction =
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

export default authReducer;