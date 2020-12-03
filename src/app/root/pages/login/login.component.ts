import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    const signupButton : any = document.getElementById("signup-button");
    const loginButton : any = document.getElementById("login-button");
    const userForms : any = document.getElementById("user_options-forms");
    
    signupButton.addEventListener(
      "click",
      () => {
        userForms.classList.remove("bounceRight");
        userForms.classList.add("bounceLeft");
      },
      false
    );
    loginButton.addEventListener(
      "click",
      () => {
        userForms.classList.remove("bounceLeft");
        userForms.classList.add("bounceRight");
      },
      false
    );
  }

  testApi(){
    this.appService.getTest().subscribe(data => {
      console.log("DATA RECIBIDA: ", data);
    })
  }
  login(){
    console.log("LOGIN!");
    this.router.navigate(['/home']);
  }
}
