import { Component, OnInit } from '@angular/core';
import { Phone } from '../models/phone';
import { PhoneService } from '../service/phone.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listas-phone',
  templateUrl: './listas-phone.component.html',
  styleUrls: ['./listas-phone.component.css']
})

export class ListasPhoneComponent implements OnInit {

  Phone: Phone[] = [];

  constructor(
    private phoneService: PhoneService,
    private toastr: ToastrService
  ) { }


  ngOnInit() {
    this.cargarNumeros();
  }

  cargarNumeros(): void {
    this.phoneService.lista().subscribe(
      data => {
        this.Phone = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.phoneService.delete(id).subscribe(
      data => {
        this.toastr.success('Numero Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarNumeros();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );

  }


}
