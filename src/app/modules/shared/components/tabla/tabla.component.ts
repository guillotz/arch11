import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() datos: any;
  @Input() cols: any;
  @Input() showRadioInicio: boolean = false;
  @Input() showRadioFondo: boolean = false;
  @Input() showCheckInicio: boolean = false;
  @Input() showCheckFondo: boolean = false;
  @Input() modoSeleccion: string = 'simple';
  @Input() showPaginator: boolean = true;
  @Input() rowsPerPage: number = 5;
  @Input() showCabecera: boolean = false;
  @Input() showActions: boolean = false;
  @Input() mensajePaginado = "Mostrando {first} a {last} de {totalRecords} registros";
  cars?: any[];
  selectedItem?: any;
  constructor() { }

  ngOnInit(): void {
    
  }
  onRowSelect(rowData: any) {
    console.log(rowData);
  }
}
