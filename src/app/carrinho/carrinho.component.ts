import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  listaCompras = this.carrinho.listar();
  comprados = this.carrinho.listar();

  constructor(
    private carrinho: CarrinhoService,
    private prod: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  total() {
    return this.comprados.map((item) => item.valor).reduce((a, b) => a + b, 0);
  }

  parcela(){
    return this.total()/12
  }

  finalizar() {
    this.carrinho.limpar()
    this.router.navigate(['/inicio']);
      alert('Compra finalizada com sucesso!');
  }

  limpar(){
    this.carrinho.limpar()
  }
}

