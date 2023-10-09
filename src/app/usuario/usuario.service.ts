import { Injectable } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private requisicao_service:RequisicaoService
  ) { }

  salvar(fd:any){
    return this.requisicao_service.post(fd,'usuario');
  }

  editar(indice:string,fd:any){

  }

  get(){
    this.requisicao_service.get();
  }
}
