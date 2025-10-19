import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRepository } from './base.repository';
import { Cliente, ClienteDTO } from '../../core/models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteRepository extends BaseRepository {
  constructor(http: HttpClient) {
    super(http);
  }

  async getAll(): Promise<Cliente[]> {
    return this.get<Cliente[]>('/clientes');
  }

  async getById(id: string): Promise<Cliente> {
    return this.get<Cliente>(`/clientes/${id}`);
  }

  async create(cliente: ClienteDTO): Promise<Cliente> {
    return this.post<Cliente>('/clientes', cliente);
  }

  async update(id: string, cliente: ClienteDTO): Promise<Cliente> {
    return this.put<Cliente>(`/clientes/${id}`, cliente);
  }

  async delete(id: string): Promise<void> {
    return this.delete<void>(`/clientes/${id}`);
  }

  async search(query: string): Promise<Cliente[]> {
    return this.get<Cliente[]>(`/clientes/search?q=${encodeURIComponent(query)}`);
  }
}
