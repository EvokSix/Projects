import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private router: Router, private fb: FormBuilder) { }

password!: string;
email!: string;
entrada!: FormGroup;

  ngOnInit(): void {
    this.entrada = this.fb.group({
      email: ['', Validators.email],
      password: ['']
    });
  }

  login() : void {
    if(this.email == 'ferreira@gmail.com' && this.password == '123'){
     //this.router.navigate(["app-root"]);
     alert(this.entrada.get(this.password));

    }else {
      alert("Email ou senha inválida"+" "+this.entrada.value+" "+this.password);
    }
  }
  }
