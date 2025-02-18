import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../models/formateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService
{
  private apiUrl='http://localhost:3000/formateurs';
  constructor(private http: HttpClient) {}
  getFormateurs(): Observable<Formateur[]>
  {
    return this.http.get<Formateur[]>(this.apiUrl);
  }
  getFormateur(id: number): Observable<Formateur>
  {
    return this.http.get<Formateur>(`${this.apiUrl}/${id}`);
  }
  addFormateur(formateur: Formateur): Observable<Formateur>
  {
    return this.http.post<Formateur>(this.apiUrl, formateur);
  }
  updateFormateur(id: number, formateur: Formateur): Observable<Formateur>
  {
    return this.http.put<Formateur>(`${this.apiUrl}/${id}`, formateur);
  }
  deleteFormateur(id: number): Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}