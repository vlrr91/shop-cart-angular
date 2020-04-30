import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username?: string;
  redirectUrl: string;

  signIn(username: string, pass: string): void {
    if (username && pass) {
      this.username = username;
    }
  }

  singOut(): void {
    this.username = null;
  }
}
