import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-inicio',
  templateUrl: './produto-inicio.component.html',
  styleUrls: ['./produto-inicio.component.css']
})

export class ProdutoInicioComponent implements OnInit {

  produto: Produto = new Produto();

  idProduto: number;
  listaCategorias: Categoria[];
  listaProdutos: Produto[];

  constructor(
    public auth: AuthService,
    private prod: ProdutoService,
    private catg: CategoriaService,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    this.getAllCategorias();
    this.getAllProdutos();
  }

  getAllCategorias() {
    this.catg.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp;
    });
  }

  getAllProdutos() {
    this.prod.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
      this.listaProdutos.sort((a, b) => a.valor - b.valor)
    });

  }

  getProdutoById(id: number) {
    if (this.auth.logado() == true) {
      this.prod.getByIdProduto(id).subscribe((resp: Produto) => {
        this.produto = resp;
        this.adicionarProduto()
      })
    } else {
      alert("Cadastre-se para realizar a compra.")
      this.router.navigate(['/cadastrar'])
    }

  }


  adicionarProduto() {
    this.carrinhoService.adicionar(this.produto)
    console.log(this.carrinhoService.produtos)
  }
}






