import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  newUsuario: User={
    username : "",
    password: "",
    correo:""
  }

  constructor(private apiCrud: ApiCrudService,
              private router: Router) { }

  ngOnInit() {
  }

  crearUsuario(){
    this.apiCrud.CrearUsuario(this.newUsuario).subscribe();
    this.router.navigateByUrl("/inicio");
  }
}