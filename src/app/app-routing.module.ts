import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {path:'altaClientes', component: AltaClienteComponent},
  {path: 'listadoClientes', component: ListaClientesComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
