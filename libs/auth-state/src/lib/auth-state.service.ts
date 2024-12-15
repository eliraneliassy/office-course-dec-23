import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private user: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  login(userName: string) {
    this.user.next(userName);
  }

  getUser(): Observable<string |null> {
    return this.user.asObservable();
  }

  logout(): void {
    this.user.next(null);
  }



}
