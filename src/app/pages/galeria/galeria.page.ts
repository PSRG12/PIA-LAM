import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ImagenModalPage } from "../imagen-modal/imagen-modal.page"

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage{

  imagenes_papa = [
    'assets/Fotos_Papas/foto1.jpg',
    'assets/Fotos_Papas/foto2.jpg',
    'assets/Fotos_Papas/foto3.jpeg',
    'assets/Fotos_Papas/foto4.jpg',
  ]
  
  constructor(private modalController: ModalController){

  }

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  };

  openPreview(img){
    this.modalController.create({
      component: ImagenModalPage,
      componentProps: {
        img: img
      }
    }).then(modal => modal.present());
  }
  
}
