import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from './car.model';
import { ResponseMessage } from './responsemessage.model';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  
  findAll():Observable<ResponseMessage> {
    const url = `${this.baseUrl}/`
    return this.http.get<ResponseMessage>(`${this.baseUrl}/`)
  }

   
  findById(id: number): Observable<ResponseMessage> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<ResponseMessage>(url)
  }

  create(car: Car): Observable<Car>{
    const url = `${this.baseUrl}/`
    return this.http.post<Car>(url, car);
  }

  delete(id: number):Observable<void> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url)
  }

  update(car: Car):Observable<void> {
    const url = `${this.baseUrl}/${car.id}`
    return this.http.put<void>(url, car)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 2000
    })
  }

}
