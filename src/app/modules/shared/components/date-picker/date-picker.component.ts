import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  
  @Input() value?: Date; 
  es : any;
  @Input() diaMaximo?: Date;
  @Input() diaMinimo?: Date;
  @Output() fechaSeleccionada: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

    if(this.value === null || this.value === undefined){
      this.value = new Date();
    }
  
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "Domingo","lunes","Marrtes","Miércoles","Jueves","Viernes","Sábado" ],
      dayNamesShort: [ "Dom","Lun","Mar","Mié","Jue","Vie","Sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
      monthNamesShort: [ "Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }
  
  }

  capturoFecha(){
    this.fechaSeleccionada.emit(this.value);
  }

}
