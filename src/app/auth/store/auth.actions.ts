import { Action } from '@ngrx/store';

export const LOGIN: string = '[Auth] Login';
export const LOGOUT: string = '[Auth] Logout';

export class Login implements Action {
  readonly type: string = LOGIN;

  constructor(public payload: {
    email: string,
    userId: string,
    token: string,
    expirationDate: Date
  }) {}
}

export class Logout implements Action {
  readonly type: string = LOGOUT;
}

export type AuthActions =
  Login
| Logout;
