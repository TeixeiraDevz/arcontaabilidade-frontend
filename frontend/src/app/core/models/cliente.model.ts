export interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  tipoPessoa: 'PF' | 'PJ';
  documento: string; // CPF ou CNPJ
  endereco?: Endereco;
  ativo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ClienteDTO {
  nome: string;
  email: string;
  telefone: string;
  tipoPessoa: 'PF' | 'PJ';
  documento: string;
  endereco?: Endereco;
}

export interface Endereco {
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}
