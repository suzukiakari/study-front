import { Component } from '@angular/core';
import { Menu } from './model/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  menu: Menu[];

  constructor() {
    this.menu = new Array();
    var menuDetail : Menu[] = [
      {
        "link": "",
        "pageName": "マイページ", 
      },
      {
        "link": "#",
        "pageName": "メニュー選択", 
      },
      {
        "link": "#",
        "pageName": "コース選択", 
      }
    ]
    this.menu = menuDetail;
    
  }
  
}
