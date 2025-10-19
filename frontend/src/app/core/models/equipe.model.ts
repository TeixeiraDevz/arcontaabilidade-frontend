export interface Membro {
  id: string;
  nome: string;
  cargo: string;
  email: string;
  telefone: string;
  especialidades: string[];
  foto?: string;
  bio?: string;
  ativo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EquipeDTO {
  nome: string;
  cargo: string;
  email: string;
  telefone: string;
  especialidades: string[];
  foto?: string;
  bio?: string;
}
