import { ListaCadastrosService } from './../app/core/lista-cadastros.service';
import { ListaCadastros } from './../app/shared/models/lista-cadastros';
import { Component, OnInit } from '@angular/core';




@Component({
    selector: 'listagem-cadastros',
    templateUrl: './listagem-cadastros.component.html',
    styleUrls: ['./listagem-cadastros.component.css']
})

export class ListagemCadastrosComponent implements OnInit{

  cadastros!: ListaCadastros[];

  constructor(private listaCadastroService: ListaCadastrosService) {}

  ngOnInit(){
    this.listaCadastroService.listar().subscribe((cadastros: ListaCadastros[]) => this.cadastros = cadastros);
  }

}
