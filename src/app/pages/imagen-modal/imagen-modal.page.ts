import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})
export class ImagenModalPage implements OnInit {

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

  ngOnInit() {
    this.img = this.navParams.get('img');

  }

  zoom(zoomIn: boolean){
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn){
      zoom.in();
    } else {
      zoom.out();
    }
  }

  close() {
    this.modalController.dismiss();
  }


}
