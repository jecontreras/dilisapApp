import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from '../pipe/pipe.module';
import { ContenidoComponent } from './contenido/contenido.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { TabsComponent } from './tabs/tabs.component';
import { BuscadorComponent } from './buscador/buscador.component';



@NgModule({
  entryComponents:[
    DetalleComponent,
    BuscadorComponent
  ],
  declarations: [
    HeaderComponent,
    DetalleComponent,
    BuscadorComponent,
    ContenidoComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    TabsComponent
  ],
  exports: [
    HeaderComponent,
    DetalleComponent,
    BuscadorComponent,
    ContenidoComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipeModule
  ],
})
export class ComponentsModule { }
