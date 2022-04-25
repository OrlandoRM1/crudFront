import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../service/phone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Phone } from '../models/phone';

@Component({
  selector: 'app-detalle-phone',
  templateUrl: './detalle-phone.component.html',
  styleUrls: ['./detalle-phone.component.css']
})
export class DetallePhoneComponent implements OnInit {

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
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }

}
