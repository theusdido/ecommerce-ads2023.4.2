import { Component } from '@angular/core';
import { AutenticacaoService } from './autenticacao.service';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.scss']
})
export class AutenticacaoComponent {
  public login:string = '';
  public senha:string = '';

  constructor(
    public autenticacao_service:AutenticacaoService
  ){}

  entrar(){
    this.autenticacao_service.logar(this.login,this.senha)
    .subscribe(
      () => {
        
      }
    )
  }
}
