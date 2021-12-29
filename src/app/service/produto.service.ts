import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>("https://cultivar.herokuapp.com/produtos")
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`https://cultivar.herokuapp.com/produtos/by-id/${id}`)
  }

  getByProduto(produto: string): Observable<Produto>{
    return this.http.get<Produto>(`https://cultivar.herokuapp.com/produtos/by-produto/${produto}`)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>("https://cultivar.herokuapp.com/produtos", produto, this.token)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>("https://cultivar.herokuapp.com/produtos", produto, this.token)
  }

  deleteProduto(id: number){
    return this.http.delete(`https://cultivar.herokuapp.com/produtos/${id}`, this.token)
  }
  
}
