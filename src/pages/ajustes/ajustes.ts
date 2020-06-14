import { ModalPage } from './../index.paginas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, 
            public navParams: NavParams, 
            private modalCtrl:ModalController) {

            console.log("Constructor Ajustes")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  goToTabPrincipal() {
    this.navCtrl.parent.select(0);
  }

  showModal() {
    let modal = this.modalCtrl.create(ModalPage, { 'nombre':'Eday', 'edad': 31 });
    modal.present();

    modal.onDidDismiss(parametrosRecibidos =>{
      if(parametrosRecibidos){
        console.log(parametrosRecibidos)
      } else {
        console.log("Se cerró sin parámetros")
      }
      
    })
  }

}
