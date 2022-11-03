import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MotosComponent } from './motos/motos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ContactosComponent } from './contactos/contactos.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'motos',
    component:MotosComponent
  },
  {
    path:'formulario',
    component:FormularioComponent
  },
  {
    path:'contactos',
    component:ContactosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
