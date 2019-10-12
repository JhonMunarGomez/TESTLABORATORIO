import { Component, OnInit } from '@angular/core';
import {orden,persona,examen} from '../interface/orden'
@Component({
  selector: 'app-gestor-ordenes',
  templateUrl: './gestor-ordenes.component.html',
  styleUrls: ['./gestor-ordenes.component.css']
})
export class GestorOrdenesComponent implements OnInit {
  identificacion:any;
  isRegistro:boolean=false;
  orden:orden;
  paciente:persona={identificacion:'1134',nombre:'Jhon',apellido:'Munar',fecha_nacimiento:'10/02/08'};
  list_examen:examen[]=[{codigo_examen:'123',nombre:'Serologia'},
{codigo_examen:'12444',nombre:'Anticuerpos Igm'}];
  numero_orden:string;
  numero_laboratorio:string;
  lista_examenes:examen[]=[
    {codigo_examen:'1',nombre:'Examen de prueba 1'},
    {codigo_examen:'2',nombre:'Examen de prueba 2'},
    {codigo_examen:'3',nombre:'Examen de prueba 3'},
    {codigo_examen:'4',nombre:'Examen de prueba 4'},
    {codigo_examen:'5',nombre:'Examen de prueba 5'}
  ]
  constructor() { }

  ngOnInit() {
  }
  public añadirExamen(examen:examen){
     this.list_examen.push(examen);
  }
  public demo(isDemo:boolean){
       if(isDemo){
          this.orden={codigo_orden:this.numero_orden,paciente:this.paciente,
          list_examen:this.list_examen};
       }else{

       }
   }
   Eliminar(isDemo:boolean,index){
     if(isDemo){
         this.list_examen.splice(index,1);
     }else{

     }
   }
   buscar(isDemo:boolean){
    let encontrado=false;
     if(isDemo){
          for(var i=0;i<this.lista_examenes.length;i++){
            console.log(this.numero_laboratorio);
             if(this.lista_examenes[i].codigo_examen==this.numero_laboratorio){
                encontrado=true;
                this.añadirExamen(this.lista_examenes[i]);
             }
          }
          if(!encontrado){
            alert('Laboratorio no encontrado')
          }
     }else{

     }
  }

  BuscarPersona(isDemo:boolean){
   if(isDemo){
       this.orden.paciente={nombre:'Paciente X',apellido:'APELLIDOX',identificacion:this.identificacion}
   }else{

   }
  }

  RegistrarOrden(isDemo:boolean){
    if(isDemo){
       this.isRegistro=true;
       this.list_examen.splice(0,this.list_examen.length);
       this.orden={codigo_orden:this.numero_orden,paciente:null,
        list_examen:this.list_examen};
    }
  }
}

