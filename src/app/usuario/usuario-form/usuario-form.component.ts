import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent {
  public id:number      = 0;
  public nome:string    = '';
  public email:string   = '';
  public login:string   = '';
  public senha:string   = '';

  constructor(
    private usuario_service:UsuarioService,
    private activated_route:ActivatedRoute
  ){

    this.activated_route.params
    .subscribe(
      (params:any) => {
        // Caso seja um registro novo
        // interronper o método
        if (params.indice == undefined) return;

        this.usuario_service.load(params.indice)
        .subscribe((_dado:any) => {
          this.id     = _dado.id;
          this.nome   = _dado.nome;
          this.email  = _dado.email;
          this.login  = _dado.login;
          this.senha  = _dado.senha;
        });
      }
    );
  }

  salvar(){

    if (this.nome == ''){
      document.querySelector('#nome')
      ?.classList.add('has-error');
      return;
    }

    let dados:any = {
      nome:this.nome,
      email:this.email,
      login:this.login,
      senha:this.senha
    };

    if (this.id == 0){
      this.usuario_service.salvar(dados).subscribe();
    }else{
      dados.id = this.id;
      this.usuario_service.editar(dados,this.id).subscribe();
    }
  }
}
