import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"


export class Produto{
  public id: number
  public produto: string
  public valor: number
  public estoque: number
  public pesoUnitario: number
  public categoriaDoProduto: Categoria
  public criador: Usuario
  public fotoProduto: string
}
