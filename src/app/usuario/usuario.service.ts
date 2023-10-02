import { Injectable } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private requisicao_service:RequisicaoService
  ) { }

  salvar(fd:FormData){
    return this.requisicao_service.post(fd,'usuario');
  }

  editar(indice:string,fd:FormData){

  }
}
