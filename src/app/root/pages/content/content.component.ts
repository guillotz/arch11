import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  nav : boolean = false;
  side : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  enableView(tipo: string){
    switch(tipo){
      case 'nav':
        this.nav = true;
        break;
      case 'side':
        this.side = true;
        break;
      default:
        this.nav = true;
        this.side = true;
        break;
    }
  }
  limpiar(){
    this.nav = false;
    this.side = false;
  }

}
