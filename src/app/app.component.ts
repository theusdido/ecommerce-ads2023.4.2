import { Component } from '@angular/core';
import { AutenticacaoService } from './autenticacao/autenticacao.service';
import { GuardService } from './service/guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';

  public is_logged:boolean = false;
  constructor(
    public autenticacao_service:AutenticacaoService,
    public router:Router,
    public guard_service:GuardService
  ){
    guard_service.isLogged();
  }  
}
