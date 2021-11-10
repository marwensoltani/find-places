import { Injectable } from '@angular/core';
import { Place } from '../places/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'p1',
      'Dar el Janna',
      'c\'est la maison du paradis Elle se trouve au pied du cap Blanc (la pointe septentrionale de lAfrique).',
      'https://dhiefa.com/wp-content/uploads/2018/06/Dar-el-Jenna-3.jpg',
      65.5
    ),
    new Place(
      'p2',
      'Dar Selma',
      'Dar Selma un petit paradis pour le voyageur où serez accueilli comme un membre de la famille ! Hotesse délicieuse et pleine d\'attentions',
      'https://tunisie.co/uploads/images/content/dar-selma-031019-01.jpg',
      55
    ),
    new Place(
      'p3',
      'Dar el bhar',
      'Maison de Charme en location au coeur de la Medina d\'Hammamet, face à la mer, pour des vacances inoubliables.',
      'https://www.voyage-tunisie.info/wp-content/uploads/2018/03/dar-elbhar..jpg',
      80
    )
  ];

  constructor() { }

  getPlaces(){
    return [...this.places];
  }

  getPlace(id: string){
    return {
      ...this.places.find(p => p.id === id)
    };
  }
}
