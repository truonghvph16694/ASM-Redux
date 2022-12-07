import { IAuth } from "../interfaces/auth";

export const authenticated = (user: IAuth, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}
export const isAuthenticate = () => {
    if (!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user') as string)
}