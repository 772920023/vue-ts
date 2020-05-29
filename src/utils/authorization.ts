import { User } from "@/entity/user";

const STORE_KEY = "FFEAI_SERVER_USER";

export default class Authorization {
  static isLogged(): boolean {
    return this.currentUser() != null;
  }

  static logout() {
    localStorage.setItem(STORE_KEY, "");
  }

  static save(user: User) {
    localStorage.setItem(STORE_KEY, JSON.stringify(user));
  }

  static currentUser(): User | null {
    const userString = localStorage.getItem(STORE_KEY);
    if (!userString) return null;

    const user = JSON.parse(userString) as User;
    return user;
  }
}
