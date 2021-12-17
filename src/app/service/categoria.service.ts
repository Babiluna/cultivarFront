import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>("https://cultivar.herokuapp.com/categorias")
  }

  getByIdCategoria(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://cultivar.herokuapp.com/categorias/by-id/${id}`)
  }

  getByCategoria(categoria: string): Observable<Categoria>{
    return this.http.get<Categoria>(`https://cultivar.herokuapp.com/categorias/by-categoria/${categoria}`)
  }

  getByNomeVendedor(nomeVendedor: string): Observable<Categoria>{
    return this.http.get<Categoria>(`https://cultivar.herokuapp.com/categorias/by-vendedor/${nomeVendedor}`)
  }

  postCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>("https://cultivar.herokuapp.com/categorias", categoria, this.token)
  }

  putCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>("https://cultivar.herokuapp.com/categorias", categoria, this.token)
  }

  deleteCategoria(id: number){
    return this.http.delete(`https://cultivar.herokuapp.com/categorias/${id}`, this.token)
  }
}
