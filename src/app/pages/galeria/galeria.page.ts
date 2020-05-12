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

<<<<<<< HEAD
  verImagen(index,img)
  {
    this.modalCtrl.create({
      component : ImagenModalPage,
      componentProps : {
        index : index,
        img : img
=======
  openPreview(img){
    this.modalController.create({
      component: ImagenModalPage,
      componentProps: {
        img: img
>>>>>>> fdbf060646423fdf420dd715f430a34ea5aac939
      }
    }).then(modal => modal.present());
  }
  
}
