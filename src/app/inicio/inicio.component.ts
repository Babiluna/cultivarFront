import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  produto: Produto= new Produto() 
  listaProduto: Produto[]

  categoria: Categoria= new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number

  user: Usuario = new Usuario()
  idUser= environment.id

  constructor(
    private router: Router,
    private authService: AuthService,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
    
  ) { }

  ngOnInit(){
  
    this.authService.refreshToken()

  }

}
