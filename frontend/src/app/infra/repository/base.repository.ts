import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseRepository {
  protected readonly apiUrl = environment.apiUrl;

  constructor(protected http: HttpClient) { }

  protected getAuthHeaders(extra?: HttpHeaders): HttpHeaders {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return extra || new HttpHeaders();
    }

    if (!extra) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
    }

    return extra.set('Authorization', `Bearer ${token}`);
  }

  protected get<T>(endpoint: string, options?: { headers?: HttpHeaders }): Promise<T> {
    const headers = this.getAuthHeaders(options?.headers);
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, { headers }).toPromise() as Promise<T>;
  }

  protected post<T>(endpoint: string, body: any, options?: { headers?: HttpHeaders }): Promise<T> {
    const headers = this.getAuthHeaders(options?.headers);
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, body, { headers }).toPromise() as Promise<T>;
  }

  protected put<T>(endpoint: string, body: any, options?: { headers?: HttpHeaders }): Promise<T> {
    const headers = this.getAuthHeaders(options?.headers);
    return this.http.put<T>(`${this.apiUrl}${endpoint}`, body, { headers }).toPromise() as Promise<T>;
  }

  protected delete<T>(endpoint: string, options?: { headers?: HttpHeaders }): Promise<T> {
    const headers = this.getAuthHeaders(options?.headers);
    return this.http.delete<T>(`${this.apiUrl}${endpoint}`, { headers }).toPromise() as Promise<T>;
  }
}
