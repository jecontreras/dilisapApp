import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { FiltroImagenPipe } from './filtro-imagen.pipe';
import { ParesPipe } from './pares.pipe';



@NgModule({
  declarations: [ImagenPipe, FiltroImagenPipe, ParesPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ImagenPipe,
    FiltroImagenPipe,
    ParesPipe
  ]
})
export class PipeModule { }
