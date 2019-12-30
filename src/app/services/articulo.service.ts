import { Injectable } from '@angular/core';
import { ServiciosService } from './servicios.service';
import { RespuestaMDB } from '../interfas/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(
    private _service: ServiciosService
  ) { }
  
  getArticulo(data:any){
    return this._service.querys<RespuestaMDB>('themovie/get_articulo', data, 'post');
  }
}
