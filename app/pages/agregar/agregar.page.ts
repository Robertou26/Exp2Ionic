import { Component, OnInit } from '@angular/core';
import { IAlumno } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  newAlumno: IAlumno={
    nombre : "",
    rut: "",
    tipoPersona: ""
  }

  constructor(private apiCrud: ApiCrudService,
              private router: Router) { }

  ngOnInit() {
  }

  crearAlumno(){
    this.apiCrud.CrearAlumno(this.newAlumno).subscribe();
    this.router.navigateByUrl("/listar");
  }
}
