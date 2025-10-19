import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRepository } from './base.repository';
import { Membro, EquipeDTO } from '../../core/models/equipe.model';

@Injectable({
  providedIn: 'root'
})
export class EquipeRepository extends BaseRepository {
  constructor(http: HttpClient) {
    super(http);
  }

  async getAll(): Promise<Membro[]> {
    return this.get<Membro[]>('/equipe');
  }

  async getById(id: string): Promise<Membro> {
    return this.get<Membro>(`/equipe/${id}`);
  }

  async create(membro: EquipeDTO): Promise<Membro> {
    return this.post<Membro>('/equipe', membro);
  }

  async update(id: string, membro: EquipeDTO): Promise<Membro> {
    return this.put<Membro>(`/equipe/${id}`, membro);
  }

  async delete(id: string): Promise<void> {
    return this.delete<void>(`/equipe/${id}`);
  }

  async getByEspecialidade(especialidade: string): Promise<Membro[]> {
    return this.get<Membro[]>(`/equipe/especialidade/${encodeURIComponent(especialidade)}`);
  }
}
