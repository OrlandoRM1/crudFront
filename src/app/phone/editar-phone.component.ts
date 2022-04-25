import { Component, OnInit } from '@angular/core';
import { Phone } from '../models/phone';
import { PhoneService } from '../service/phone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-phone',
  templateUrl: './editar-phone.component.html',
  styleUrls: ['./editar-phone.component.css']
})
export class EditarPhoneComponent implements OnInit {

  Phone: any = null;

  constructor(
    private phoneService: PhoneService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.phoneService.detail(id).subscribe(
      data => {
        this.Phone = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.phoneService.update(id, this.Phone).subscribe(
      data => {
        this.toastr.success('Numero Actualizado', 'OK', {
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

  volver(): void {
    this.router.navigate(['/']);
  }

}
