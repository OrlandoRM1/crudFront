import { Component, OnInit } from '@angular/core';
import { Phone } from '../models/phone';
import { PhoneService } from '../service/phone.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-phone',
  templateUrl: './nuevo-phone.component.html',
  styleUrls: ['./nuevo-phone.component.css']
})
export class NuevoPhoneComponent implements OnInit {

  nombre = '';
  numero = 0;
  //id = this.id;

  constructor(
    private phoneService: PhoneService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const phone = new Phone(this.nombre, this.numero);
    this.phoneService.save(phone).subscribe(
      data => {
        this.toastr.success('Numero Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}
