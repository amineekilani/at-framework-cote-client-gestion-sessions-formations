import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService
{
  private apiUrl='http://localhost:3000/candidats';
  constructor(private http: HttpClient) {}
  getCandidats(): Observable<Candidat[]>
  {
    return this.http.get<Candidat[]>(this.apiUrl);
  }
  getCandidat(id: number): Observable<Candidat>
  {
    return this.http.get<Candidat>(`${this.apiUrl}/${id}`);
  }
  addCandidat(candidat: Candidat): Observable<Candidat>
  {
    return this.http.post<Candidat>(this.apiUrl, candidat);
  }
  updateCandidat(id: number, candidat: Candidat): Observable<Candidat>
  {
    return this.http.put<Candidat>(`${this.apiUrl}/${id}`, candidat);
  }
  deleteCandidat(id: number): Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}