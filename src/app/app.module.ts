import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListasPhoneComponent } from './phone/listas-phone.component';
import { DetallePhoneComponent } from './phone/detalle-phone.component';
import { NuevoPhoneComponent } from './phone/nuevo-phone.component';
import { EditarPhoneComponent } from './phone/editar-phone.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'

//external importas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ListasPhoneComponent,
    DetallePhoneComponent,
    NuevoPhoneComponent,
    EditarPhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
