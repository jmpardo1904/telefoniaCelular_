import { Component, OnInit } from '@angular/core';
import { UsuarioCelModel } from '../../../../models/usuariocel.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-registrocelular',
  templateUrl: './registrocelular.component.html'
})
export class RegistrocelularComponent implements OnInit {

  public usuario: UsuarioCelModel;


  constructor() { 
      this.usuario = new UsuarioCelModel();
  }

  ngOnInit() {
  }

  public registroCel(form: NgForm) {


    if(form.invalid){
      console.log("formulario invalido");
      return;
      
    }
    
    console.log("datos de usuario", this.usuario);
    

  }

}
