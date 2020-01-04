import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Genre } from 'src/app/interfas/interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  tabs = [];
  listCategoria:Genre[] = [];
  constructor(
    private _Categoria: CategoriaService,
  ) { }

  ngOnInit() {
    this.getlistCategoria();
  }
  getlistCategoria(){
    this._Categoria.getCategoria({})
    .subscribe(rta=>{
      console.log(rta);
      this.listCategoria = rta['genres'];
      this.tabs = this.listCategoria.map(row=>{
        return {
          path: 'tab1',
          icon: "airplane",
          name: row.name,
          id: row.id
        };
      });
      this.tabs.unshift({
        path: 'tab1',
        icon: "airplane",
        name: "Home"
      })
    });
  }

}
