import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtoslista',
  templateUrl: './produtoslista.component.html',
  styleUrls: ['./produtoslista.component.css']
})
export class ProdutoslistaComponent implements OnInit {

  produto: Produto= new Produto() 
  listaProduto: Produto[]

  categoria: Categoria= new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number

  constructor( private router: Router,
    private authService: AuthService,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService) { }

  ngOnInit(){
    this.authService.refreshToken()
  }

}
