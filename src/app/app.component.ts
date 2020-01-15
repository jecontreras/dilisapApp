import { Component } from '@angular/core';
import { Componente } from './interfas/interfaces';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public data:any={};
  componentes: Observable<Componente[]>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataService: DataService,
  ) {
    this.initializeApp();
    this.cargarMenu();
  }

  cargarMenu(){

  }

  async initializeApp() {
    this.platform.ready().then(async() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.dataService.getMenuOpts().subscribe(rta=>this.componentes = rta.mensaje);
    });
  }
  iniciar_seccion(){

  }
  cerrar_seccion(){

  }
}
