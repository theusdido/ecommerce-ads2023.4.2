import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.scss']
})
export class UsuarioListarComponent implements OnInit {
  public dados:Array<any> = [];
  public termo:string = '';

  constructor(
    private usuario_service:UsuarioService,
    private router:Router
  ){}

  ngOnInit(): void {
      this.listar();
  }

  editar(_id:number){
    this
    .router
    .navigate(['/usuario/form/' + _id]);
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

  pesquisar(){
    let _termo = this.termo;
    if (_termo == '') {
      this.listar();
      return;
    }
    this.usuario_service.pesquisar(_termo)
    .subscribe(
      (_dados:any) => {
        this.dados = _dados;
      }
    );
  }

}
