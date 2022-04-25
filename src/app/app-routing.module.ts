import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePhoneComponent } from './phone/detalle-phone.component';
import { EditarPhoneComponent } from './phone/editar-phone.component';
import { ListasPhoneComponent } from './phone/listas-phone.component';
import { NuevoPhoneComponent } from './phone/nuevo-phone.component';

const routes: Routes = [
  {path: '', component: ListasPhoneComponent},
  {path: 'detalle/:id', component: DetallePhoneComponent},
  {path: 'nuevo', component: NuevoPhoneComponent},
  {path: 'editar/:id', component: EditarPhoneComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
