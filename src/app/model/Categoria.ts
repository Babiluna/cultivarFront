import { Produto } from "./Produto";

export class Categoria{
  public id: number
  public categoria: string
  public nomeVendedor: string
  public formaPagamento: string
  public produtos: Produto[]
}