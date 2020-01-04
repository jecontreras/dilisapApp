import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from '../pipe/pipe.module';
import { ContenidoComponent } from './contenido/contenido.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContenidoComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
  ],
  exports: [
    HeaderComponent,
    ContenidoComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipeModule
  ],
})
export class ComponentsModule { }
