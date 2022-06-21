import { loadContextual } from "./utils";

export function authLogin(loginEntry) {
    return loadContextual('/api/auth/login', loginEntry) 
}

export function authMe() {
    return loadContextual('/api/auth/me') 
}