import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRepository } from './base.repository';
import { LoginRequest, LoginResponse, Usuario } from '../../core/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthRepository extends BaseRepository {
  constructor(http: HttpClient) {
    super(http);
  }

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    return this.post<LoginResponse>('/auth/login', credentials);
  }

  async logout(): Promise<void> {
    return this.post<void>('/auth/logout', {});
  }

  async validateToken(): Promise<Usuario> {
    return this.get<Usuario>('/auth/validate');
  }

  async refreshToken(): Promise<LoginResponse> {
    return this.post<LoginResponse>('/auth/refresh', {});
  }
}
