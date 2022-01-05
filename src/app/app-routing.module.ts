import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';

import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaprodutosComponent } from './listaprodutos/listaprodutos.component';
import { ProdutoInicioComponent } from './produto-inicio/produto-inicio.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoslistaComponent } from './produtoslista/produtoslista.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';

const routes: Routes = [

  {path:"", redirectTo:"inicio", pathMatch:"full"},

  {path: "entrar", component: EntrarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: "inicio", component: InicioComponent},
  {path: "categoria", component: CategoriaComponent},
  {path: "produto", component: ProdutoComponent},
  {path: "sobrenos", component: SobrenosComponent},
  {path: "carrinho", component: CarrinhoComponent},
  {path: "produtoslista", component: ProdutoslistaComponent},

  {path: "categoria-edit/:id", component: CategoriaEditComponent},
  {path: "categoria-delete/:id", component: CategoriaDeleteComponent},
  {path: "produto-edit/:id", component: ProdutoEditComponent},
  {path: "produto-delete/:id", component: ProdutoDeleteComponent},
  {path: "user-edit/:id", component: UserEditComponent},
  {path: "ProdutoInicio/:id", component: ProdutoInicioComponent},
  {path: "ListaProdutos/:id", component: ListaprodutosComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
