import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.scss']
})
export class UsuarioListarComponent implements OnInit {
  public dados:Array<any> = [];

  constructor(
    private usuario_service:UsuarioService
  ){

  }
  ngOnInit(): void {
      this.listar();
  }

  editar(_indice:number){

  }

  excluir(_id:number){
    return this.usuario_service.excluir(_id)
    .subscribe(()=>{
      this.listar();
    });
  }

  listar(){
    this.usuario_service.listar()
    .subscribe(
      (_dados:any) => {
        this.dados = _dados;
      }
    );
  }
}
