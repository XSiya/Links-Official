import {inject, Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Database, getDatabase, onValue,ref} from "@angular/fire/database";
import {} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private database: Database = getDatabase();
  constructor() {}

  getProfile(): Observable<any> {
    const subject = new Subject<any>();

    const db = getDatabase();
    const starCountRef = ref(db, 'profile/');

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      subject.next(data);
    });

    return subject.asObservable();
  }
}
