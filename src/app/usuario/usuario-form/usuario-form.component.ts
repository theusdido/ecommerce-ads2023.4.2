import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent {
  public indice:string  = '';
  // public nome:string    = '';
  // public email:string   = '';
  // public login:string   = '';
  // public senha:string   = '';

  public nome:string    = 'Edilson Bitencourt';
  public email:string   = 'edilson@teia.tec.br';
  public login:string   = 'edilson.bitencourt';
  public senha:string   = '123456';

  constructor(
    private usuario_service:UsuarioService
  ){}

  salvar(){

    if (this.nome == ''){
      document.querySelector('#nome')
      ?.classList.add('has-error');
      return;
    }

    const fd = new FormData();
    fd.append('nome',this.nome);
    fd.append('email',this.email);
    fd.append('login',this.login);
    fd.append('senha',this.senha);

    if (this.indice == ''){
      this.usuario_service.salvar(fd).subscribe();
    }else{
      this.usuario_service.editar(this.indice,fd);
    }

  }
}
