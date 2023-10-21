import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Users } from '../interfaces/interfaces';



@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage  {
 
  usuarios:Users[]=[];

  constructor(private saludo: ApiCrudService,
              private loadingCtrl : LoadingController) { }

  
  ionViewWillEnter(){
  this.loadUsuario();
  }

  async loadUsuario(event?: InfiniteScrollCustomEvent){
    
    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();


    this.saludo.SaludoUsuario().subscribe(
      {
        next: resp=>{
          console.log(resp);
         loading.dismiss();
          let listString = JSON.stringify(resp)
          this.usuarios=JSON.parse(listString)
          event?.target.complete();
          console.log(this.usuarios);
          
        },
        error: err =>{
          console.log(err.error.message);
         loading.dismiss();
        }
      }
    ) 
  }
 
}

