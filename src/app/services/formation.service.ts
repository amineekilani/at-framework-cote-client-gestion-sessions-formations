import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService
{
  private apiUrl='http://localhost:3000/formations';
  constructor(private http: HttpClient) {}
  getFormations(): Observable<Formation[]>
  {
    return this.http.get<Formation[]>(this.apiUrl);
  }
  searchFormations(keywords: string[]): Observable<Formation[]>
  {
    return this.http.get<Formation[]>(`${this.apiUrl}?tags=${keywords.join(',')}`);
  }
  getFormation(id: number): Observable<Formation>
  {
    return this.http.get<Formation>(`${this.apiUrl}/${id}`);
  }
  addFormation(formation: Formation): Observable<Formation>
  {
    return this.http.post<Formation>(this.apiUrl, formation);
  }
  updateFormation(id: number, formation: Formation): Observable<Formation>
  {
    return this.http.put<Formation>(`${this.apiUrl}/${id}`, formation);
  }
  deleteFormation(id: number): Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}