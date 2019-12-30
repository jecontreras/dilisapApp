import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from '../pipe/pipe.module';
import { ContenidoComponent } from './contenido/contenido.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContenidoComponent
  ],
  exports: [
    HeaderComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipeModule
  ],
})
export class ComponentsModule { }
