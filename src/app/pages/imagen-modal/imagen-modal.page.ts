import { Component, OnInit, ViewChild, ViewChildren, ElementRef} from '@angular/core';
import {ModalController, NavParams , IonSlides} from '@ionic/angular';
import {LoadingController} from '@ionic/angular';


@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})
export class ImagenModalPage implements OnInit {

  indice : number;
  img : any;
  

  @ViewChild(IonSlides,{static: true}) slider : IonSlides;
  //@ViewChild('slider', { read: ElementRef, static: false })slider: IonSlides;
   
  imagenes_papa = [
  'assets/Fotos_Papas/foto1.jpg',
  'assets/Fotos_Papas/foto2.jpg',
  'assets/Fotos_Papas/foto3.jpeg',
  'assets/Fotos_Papas/foto4.jpg',
]
  constructor(private modalCtrl : ModalController , private navparams : NavParams) {
  
    this.indice = this.navparams.get('index')
    console.log("URL DE LA IMAGEN:"+this.imagenes_papa[this.indice]);
   }

  
  ngOnInit() {

    console.log(this.indice);
    console.log(this.img)
    this.slider.slideTo(this.indice)
  }

  cerrarModal()
  {
    this.modalCtrl.dismiss();
  }
}
