import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ImagenModalPage} from "../imagen-modal/imagen-modal.page"

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage{

  constructor(private modalCtrl : ModalController) { 

  }
  
  imagenes_papa = [
    'assets/Fotos_Papas/foto1.jpg',
    'assets/Fotos_Papas/foto2.jpg',
    'assets/Fotos_Papas/foto3.jpeg',
    'assets/Fotos_Papas/foto4.jpg',
  ]

  imagenes_sandia = [
    'assets/Fotos_Sandias/foto1.png',
    'assets/Fotos_Sandias/foto2.png',
    'assets/Fotos_Sandias/foto3.png',
    'assets/Fotos_Sandias/foto4.png',
  ]

  verImagen(index,img)
  {
    this.modalCtrl.create({
      component : ImagenModalPage,
      componentProps : {
        index : index,
        img : img
      }
    }).then(modal => modal.present())
  }
  
}
