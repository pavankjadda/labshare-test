import { AbstractSecurityStorage } from 'angular-auth-oidc-client';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomStorage implements AbstractSecurityStorage {
  read(key: string) {
    return localStorage.getItem(key);
  }

  write(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  /*constructor(private cookieService: CookieService) {
  }

  read(key: string) {
    return this.cookieService.get(key);
  }

  write(key: string, value: any): void {
    this.cookieService.set(key, value);
  }

  remove(key: string): void {
    this.cookieService.delete(key);
  }

  clear(): void {
    this.cookieService.deleteAll();
  }*/
}
