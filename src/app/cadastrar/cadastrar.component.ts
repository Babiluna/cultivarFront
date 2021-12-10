import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  user: Usuario = new Usuario();
  tipo: string;
  confirmarSenha: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoUsuario(event: any) {
    this.tipo = event.target.value;
  }

  cadastrar() {
    this.user.tipo = this.tipo;

    if (this.user.senha != this.confirmarSenha) {
      alert('As senhas digitadas estão erradas, tente novamente.');
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
        this.user = resp;
        this.router.navigate(['/entrar']);
        alert('Usuário cadastrado com sucesso!');
      });
    }
  }
}
