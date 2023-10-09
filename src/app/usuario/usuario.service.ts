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
    
  }

  listar(){
    return this.requisicao_service.get('/usuario/listar');
  }

  excluir(_id:number){
    return this.requisicao_service.del('/usuario/'+_id);
  }
  
}
