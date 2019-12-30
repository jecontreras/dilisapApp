import { Injectable } from '@angular/core';
import { ServiciosService } from './servicios.service';
import { Genre } from '../interfas/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private _service: ServiciosService
  ) { }
  
  getCategoria(data:any){
    return this._service.querys<Genre>('themovie/get_categoria', data, 'post')
  }


}
