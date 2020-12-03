import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  testApi(){
    this.appService.getTest().subscribe(data => {
      console.log("DATA RECIBIDA: ", data);
    })
  }

}
