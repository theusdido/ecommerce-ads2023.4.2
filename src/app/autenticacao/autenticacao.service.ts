import { Injectable } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    public requisicao_service:RequisicaoService
  ) {}

  logar(usuario:string,senha:string){
    return this.requisicao_service.post({
      email:usuario,
      senha:senha
    },'auth');
  }
  
}
