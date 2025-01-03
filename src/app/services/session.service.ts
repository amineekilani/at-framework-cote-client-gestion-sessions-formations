import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../models/session';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root'
})
export class SessionService
{
  private apiUrl='http://localhost:3000/sessions';
  constructor(private http: HttpClient) {}
  getSessions(): Observable<Session[]>
  {
    return this.http.get<Session[]>(this.apiUrl);
  }
  getSession(id: number): Observable<Session>
  {
    return this.http.get<Session>(`${this.apiUrl}/${id}`);
  }
  addSession(session: Session): Observable<Session>
  {
    return this.http.post<Session>(this.apiUrl, session);
  }
  updateSession(id: number, session: Session): Observable<Session>
  {
    return this.http.put<Session>(`${this.apiUrl}/${id}`, session);
  }
  deleteSession(id: number): Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getSessionsByFormation(formationId: number): Observable<Session[]>
  {
    return this.http.get<Session[]>(`${this.apiUrl}?formationId=${formationId}`);
  }
  inscriptionSession(sessionId: number, candidat: Candidat): Observable<Session>
  {
    return this.http.post<Session>(`${this.apiUrl}/${sessionId}/inscription`, candidat);
  }
}