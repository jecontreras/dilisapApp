import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaMDB, Genre } from '../interfas/interfaces';

const headers = new HttpHeaders({
  'X-Api-Key': ""
});
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string, data, METODO){
    return this.http[METODO]<T>( query, {headers}, data );
  }

  querys<Interfas>(query:string, datas:any, METODO:string){
    let data = datas;
    data.page = datas.page ? datas.page : 1;
    data.page = datas.limit ? datas.limit : 1;
    query = URL+`/${query}`;
    return this.ejecutarQuery<RespuestaMDB>(query, data, METODO);
  }

}
