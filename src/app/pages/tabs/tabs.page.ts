import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/interfas/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  tabs = [
    {
      path: 'tab1',
      icon: "airplane",
      name: "Home"
    },
    {
      path: 'tab2',
      icon: "airplane",
      name: "Ofertas"
    },
    {
      path: 'tab3',
      icon: "airplane",
      name: "Negocios"
    }
  ];
  listCategoria:Genre[] = [];
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    // this.router.navigate(['/categoria'])
  }


}
