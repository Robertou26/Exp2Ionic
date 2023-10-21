import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  


  constructor(private alertController: AlertController,
              private menuController: MenuController) { }

  ngOnInit() {
  }


  MostrarMenu(){
    this.menuController.open('first');
  }

  async Ingresar() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Email',
        },
        {
          placeholder: 'Contraseña',
          attributes: {
          },
        },
      ],
    });

    await alert.present();
  }
}
