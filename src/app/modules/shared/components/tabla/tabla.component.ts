import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() datos: any;
  @Input() cols: any;
  cars?: any[];
  selectedCar?: any;
  constructor() { }

  ngOnInit(): void {
    
  }
  onRowSelect(rowData: any) {
    console.log(rowData);
  }
}
