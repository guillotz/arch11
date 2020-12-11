import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  nav : boolean = false;
  side : boolean = false;
  fechaSaraza = new Date();
  fechaMaxima = new Date();
  fechaMinima = new Date();
  fechaParaPasar? : Date;
  constructor() { }

  ngOnInit(): void {
    this.fechaSaraza.setMonth(1);
    this.fechaMaxima.setFullYear(2020,1,25);  
    this.fechaMinima.setFullYear(2020,1,5);
  }

  enableView(tipo: string){
    switch(tipo){
      case 'nav':
        this.nav = true;
        this.side = false;
        break;
      case 'side':
        this.side = true;
        this.nav = false;
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
  reciboFecha(a : Date){
    alert(a.getMonth());
    this.fechaParaPasar = a;
  }

}
