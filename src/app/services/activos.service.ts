import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {
  private options;
  private url = 'http://127.0.0.1:5000/api/activos';

  constructor(public http: HttpClient) {
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    })
    this.options = { headers:headers}
   }

   obtenerActivos():Observable<any>{
    return this.http.get<Observable<any>>(
      this.url
    )
   }

   guardarActivos(activo: Activos) {
    let activoJson = JSON.stringify(activo);
    return this.http.post(this.url,activo, this.options)
   }
}
