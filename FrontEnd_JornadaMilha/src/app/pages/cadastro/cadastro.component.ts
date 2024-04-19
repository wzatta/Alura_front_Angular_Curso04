import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from './../../core/services/formulario.service';
import { Component } from '@angular/core';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  perfilComponent = false;

  user!:PessoaUsuaria;

  constructor(
    private formularioService:FormularioService,
    private cadastroService: CadastroService
  ){}

  cadastrar(){
    const formCadastro = this.formularioService.getCadastro();
    const record  = formCadastro?.getRawValue() as PessoaUsuaria;
    this.cadastroService.cadastrar(record).subscribe({
      next: (result) => {this.user = result as PessoaUsuaria},
      error: (err) => {console.log(err)},
      complete: ()=> {console.log("Cadastrado com Sucesso")}
    }
  )}

}
