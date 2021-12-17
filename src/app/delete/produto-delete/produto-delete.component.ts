import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto = new Produto()
  idPost: number

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    this.authService.refreshToken()

    this.idPost = this.route.snapshot.params['id']
    this.findByIdProduto(this.idPost)
  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }
  apagar(){
    this.produtoService.deleteProduto(this.idPost).subscribe(()=>{
      alert('Produto deletado com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}


