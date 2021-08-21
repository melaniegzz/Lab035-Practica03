import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { FormsModule } from '@angular/forms';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ItemClienteComponent } from './item-cliente/item-cliente.component';


@NgModule({
  declarations: [
    AltaClienteComponent,
    ListaClientesComponent,
    ItemClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ClientesService
    ],
    exports:[
      AltaClienteComponent,
      ListaClientesComponent
    ]
})
export class ClientesModule { }
