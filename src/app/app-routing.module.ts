import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { SubcategoriaListarComponent } from './subcategoria/subcategoria-listar/subcategoria-listar.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { GuardService } from './service/guard.service';

const routes: Routes = [
  { path:'', component:HomeComponent , canActivateChild:[GuardService]},
  { 
    path:'home', component:HomeComponent,
    canActivate:[GuardService]
  },
  { 
    path:'categoria',
    component:CategoriaComponent,
    canActivate:[GuardService],
    children:[
      {path:'' , redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component:CategoriaListarComponent},
      {path:'form', component:CategoriaFormComponent},
      {path:'form/:indice', component:CategoriaFormComponent}
    ]
  },
  { 
    path:'usuario', 
    component:UsuarioComponent,
    children:[
      {path:'' , redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component:UsuarioListarComponent},
      {path:'form', component:UsuarioFormComponent},
      {path:'form/:indice', component:UsuarioFormComponent}
    ]
  },
  {
    path:'subcategoria', 
    component:SubcategoriaComponent,
    children:[
      {path:'' , redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component:SubcategoriaListarComponent},
      {path:'form', component:SubcategoriaFormComponent},
      {path:'form/:indice', component:SubcategoriaFormComponent}
    ]
  },
  { 
    path:'produto',
    component:ProdutoComponent,
    children:[
      {path:'' , redirectTo:'listar', pathMatch:'full'},
      {path:'listar', component:ProdutoListarComponent},
      {path:'form', component:ProdutoFormComponent},
      {path:'form/:indice', component:ProdutoFormComponent}
    ]
  },
  {
    path:'login',component:AutenticacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
