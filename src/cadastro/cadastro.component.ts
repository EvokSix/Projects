import { ValidarCamposService } from './../shared/componentes/campos/validar-campo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})

export class CadastroComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder,public validacao: ValidarCamposService) {}

  password!: string;
  email!: string;
  dataNascimento!: string;
  cadastro!: FormGroup;

  ngOnInit(): void {
    this.cadastro = this.fb.group({
      email: ['', Validators.email],
      password: [''],
      dataNascimento: [''],
    });
  }

  get f(){
    return this.cadastro.controls;
  }

  cadastrar(): void {
    if (this.cadastro.valid) {
      //this.router.navigate(["app-root"]);
      alert("Cadastro efetuado com sucesso");
      this.router.navigate([""]);
    } else {
      alert('Erro ao cadastrar');
    }
  }
}
