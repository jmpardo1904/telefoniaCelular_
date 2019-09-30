import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Facturacel } from '../../../../models/facturascel.models';



@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styles: []
})
export class FacturasComponent implements OnInit {

  public Facturacel:Facturacel

  constructor() { 
    this.Facturacel = new Facturacel();
  }

  ngOnInit() {
  }
  public registroFac(form: NgForm) {


    if(form.invalid){
      console.log("formulario invalido");
      return;
      
    }
    
    console.log("datos de usuario", this.Facturacel);
    

  }

}
