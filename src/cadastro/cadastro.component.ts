import { ListaCadastrosService } from './../app/core/lista-cadastros.service';
import { ListaCadastros } from './../app/shared/models/lista-cadastros';
import { ValidarCamposService } from './../shared/componentes/campos/validar-campo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertaComponent } from 'src/shared/componentes/alerta.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})

export class CadastroComponent implements OnInit {

  constructor(public validacao: ValidarCamposService,
              public dialog: MatDialog,
              private router: Router,
              private fb: FormBuilder,
              private cadastroService: ListaCadastrosService) {}

  password!: string;
  confirmaPassword!: string;
  email!: string;
  dtNascimento!: string;
  cadastro!: FormGroup;

  ngOnInit(): void {
    this.cadastro = this.fb.group({
      email: ['', Validators.email],
      password: [''],
      confirmaPassword: [''],
      dtNascimento: ['']
    });
  }

  get f(){
    return this.cadastro.controls;
  }

  submit(): void {
    if (this.cadastro.valid) {
      //this.router.navigate(["app-root"]);
      const dialogRef = this.dialog.open(AlertaComponent);
      //this.router.navigate([""]);
      //const cadastro = this.cadastro.getRawValue() as ListaCadastros;
      //this.salvar(cadastro);
    } else {
      alert('Erro ao cadastrar');
    }
  }

  private salvar(cadastro: ListaCadastros): void{
      this.cadastroService.salvar(cadastro).subscribe(() =>{
        alert('SUCESSO');
      },
      () => {
        alert('ERRO AO SALVAR');
  });
  }

}
