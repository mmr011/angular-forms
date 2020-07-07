import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsFrom(userSettings: UserSettings): Observable<any> {
     
    return this.http.post('https://putsreq.com/qR00Sv4XDMy6g09FkimH', userSettings);

    // return of(userSettings);
  }
}
