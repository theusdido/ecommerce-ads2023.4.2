import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent {
  public indice:string  = '';
  public nome:string    = '';
  public email:string   = '';
  public login:string   = '';
  public senha:string   = '';

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
