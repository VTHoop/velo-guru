import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BikesService {
  constructor(private firestore: AngularFirestore) {}

  createBike(bike) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('Bikes')
        .add(Object.assign({}, bike))
        .then(res => {}, err => reject(err));
    });
  }

  getBikes() {
    return this.firestore.collection('Bikes').snapshotChanges();
  }
}
