import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from '../models/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  phoneUrl = 'http://localhost:8080/phone/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Phone[]> {
    return this.httpClient.get<Phone[]>(this.phoneUrl + 'lista');
  }

  public detail(id: number): Observable<Phone> {
    return this.httpClient.get<Phone>(this.phoneUrl + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Phone> {
    return this.httpClient.get<Phone>(this.phoneUrl + `detailname/${nombre}`);
  }

  public save(phone: Phone): Observable<any> {
    return this.httpClient.post<any>(this.phoneUrl + 'create', phone);
  }

  public update(id: number, phone: Phone): Observable<any> {
    return this.httpClient.put<any>(this.phoneUrl + `update/${id}`, phone);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.phoneUrl + `delete/${id}`);
  }

}
