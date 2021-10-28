import { ListaCadastros } from './../shared/models/lista-cadastros';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


const url = 'http://localhost:3000/lista-cadastros/';
@Injectable({
  providedIn: 'root'
})

export class ListaCadastrosService{

  constructor(private http: HttpClient){}

  salvar(cadastro: ListaCadastros): Observable<ListaCadastros>{
    return this.http.post<ListaCadastros>(url, cadastro);
  }

}
