import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { ProdutoInicioComponent } from './produto-inicio/produto-inicio.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutoslistaComponent } from './produtoslista/produtoslista.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    UserEditComponent,
    CategoriaComponent,
    ProdutoComponent,
    SobrenosComponent,
    ProdutoInicioComponent,
    CarrinhoComponent,
    ProdutoslistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
