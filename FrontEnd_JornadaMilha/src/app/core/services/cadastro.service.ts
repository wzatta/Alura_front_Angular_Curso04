import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { PessoaUsuaria } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http:HttpClient
  ) { }


  cadastrar(record:PessoaUsuaria){
    return this.http.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, record);
  }

}
