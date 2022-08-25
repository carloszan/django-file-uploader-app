import { IUser } from "../contexts/AuthContext";

export const initialState: IUser = {
  email: "",
  token: "",
  username: "",
};

export type Action = {
  type: string;
  payload: any;
};

export const authReducer = (state: IUser, action: Action): IUser => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.payload.token };
  }
  return state;
};
