import { Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {ModalController, NavParams , IonSlides} from '@ionic/angular';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})
export class ImagenModalPage implements OnInit {

  indice : number;

  @ViewChild("slides",{static: true}) slides : IonSlides;
   
  imagenes_papa = [
  'assets/Fotos_Papas/foto1.jpg',
  'assets/Fotos_Papas/foto2.jpg',
  'assets/Fotos_Papas/foto3.jpeg',
  'assets/Fotos_Papas/foto4.jpg',
]
  constructor(private modalCtrl : ModalController , private navparams : NavParams) {

    this.indice = this.navparams.get('index')
    console.log("Indice que recibi:" +this.indice)
   }

  ngOnInit() {

    console.log("Indice al cual moverme:"+ this.indice)
    this.slides.slideTo(this.indice)
  }

  cerrarModal()
  {
    console.log("Indice de salida:"+ this.indice)
    this.modalCtrl.dismiss()
  }
}
