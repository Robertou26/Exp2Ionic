import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IAlumnos } from '../interfaces/interfaces';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage {

  alumnos:IAlumnos[]=[];

  constructor(private alumnoService: ApiCrudService,
              private loadingCtrl : LoadingController) { }

  
  ionViewWillEnter(){
  this.loadAlumnos();
  }

  async loadAlumnos(event?: InfiniteScrollCustomEvent){
    
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();


    this.alumnoService.listarAlumnos().subscribe(
      {
        next: resp=>{
          console.log(resp);
         loading.dismiss();
          let listString = JSON.stringify(resp)
          this.alumnos=JSON.parse(listString)
          event?.target.complete();
          console.log(this.alumnos);
          
        },
        error: err =>{
          console.log(err.error.message);
         loading.dismiss();
        }
      }
    ) 
  }
 
}
