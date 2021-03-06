import { Pagina2Page } from './../index.paginas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pagina2=Pagina2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menuCtrl: MenuController) {
  }

  navigate() {
    this.navCtrl.push(Pagina2Page)
  }

  showMenu() {
    this.menuCtrl.toggle();
  }

}
