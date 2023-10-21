import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  alumno={
    id:0,
    nombre:"",
    tipoPersona:"",
    rut:""
  }
  constructor(private router:Router, 
              private apiCrud: ApiCrudService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getAlumnoById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getAlumnoById(alumnoID:number){
    this.apiCrud.BuscarAlumnoId(alumnoID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.alumno={
          id: resp[0].id,
          nombre: resp[0].nombre,
          tipoPersona: resp[0].tipoPersona,
          rut: resp[0].rut
        }
      }
    )
  }
  
  eliminarAlumno(){
    this.apiCrud.EliminarAlumno(this.alumno).subscribe();
    this.router.navigateByUrl("listar");
  }
}
