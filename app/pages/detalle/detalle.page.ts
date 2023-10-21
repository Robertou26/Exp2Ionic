import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  alumno ={
    id:0,
    nombre:"",
    tipoPersona:"",
    rut:""
  }
  constructor(private apiCrud: ApiCrudService, 
              private router: Router) { }

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

}
