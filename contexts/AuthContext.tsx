import React, { createContext, useContext, useReducer } from "react";
import { Action, authReducer, initialState } from "../reducers/AuthReducer";

export interface IUser {
  username: string;
  email: string;
  token: string;
}

type AuthContextType = {
  state: IUser | null;
  dispatch: React.Dispatch<Action> | null;
};

const cinitialState: AuthContextType = {
  state: initialState,
  dispatch: null,
};
const AuthContext = createContext<AuthContextType>(cinitialState);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = (props: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{ state, dispatch }} {...props} />;
};
