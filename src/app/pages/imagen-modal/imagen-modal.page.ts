<<<<<<< HEAD
import { Component, OnInit, ViewChild, ViewChildren, ElementRef} from '@angular/core';
import {ModalController, NavParams , IonSlides} from '@ionic/angular';
import {LoadingController} from '@ionic/angular';
=======
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';

>>>>>>> fdbf060646423fdf420dd715f430a34ea5aac939


@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})
export class ImagenModalPage implements OnInit {

<<<<<<< HEAD
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
=======
  img: any;

  @ViewChild('slider', { read: ElementRef, static: false })slider: ElementRef;

  sliderOpts = {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
    zoom: {
      maxRatio: 5
    }
  };
  
  imagenes_papa = [
    'assets/Fotos_Papas/foto1.jpg', 
    'assets/Fotos_Papas/foto2.jpg',
    'assets/Fotos_Papas/foto3.jpeg',
    'assets/Fotos_Papas/foto4.jpg',
  ]
  
  constructor(private modalController: ModalController, private navParams: NavParams) { }
>>>>>>> fdbf060646423fdf420dd715f430a34ea5aac939

  
  ngOnInit() {
    this.img = this.navParams.get('img');

<<<<<<< HEAD
    console.log(this.indice);
    console.log(this.img)
    this.slider.slideTo(this.indice)
  }

  cerrarModal()
  {
    this.modalCtrl.dismiss();
=======
  }

  zoom(zoomIn: boolean){
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn){
      zoom.in();
    } else {
      zoom.out();
    }
>>>>>>> fdbf060646423fdf420dd715f430a34ea5aac939
  }

  close() {
    this.modalController.dismiss();
  }


}
