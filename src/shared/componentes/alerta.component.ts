import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  titulo = 'Sucesso!';
  descricao = 'Seu cadastro foi efetuado com sucesso!';
  btnSucesso = 'OK';
  btnCancelar = 'Cancelar';
  corBtn = 'primary';
  possuirBtnFechar = false;

  constructor(public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    if(this.data){
      this.titulo = this.data.titulo || this.titulo;
      this.descricao = this.data.descricao || this.descricao;
      this.btnSucesso = this.data.btnSucesso || this.btnSucesso;
      this.btnCancelar = this.data.btnCancelar || this.btnCancelar;
      this.corBtn = this.data.corBtn || this.corBtn;
      this.possuirBtnFechar = this.data.possuirBtnFechar || this.possuirBtnFechar;

    }
  }



}