import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Abonne } from '../../model/Abonne';


@Injectable({
  providedIn: 'root'
})


export class AbonneService {

  url = 'http://127.0.0.1:3000/abonnes/';

  constructor(private http: HttpClient) { }


  getAbonne() {
    return this.http.get<Abonne[]>(this.url);
  }

  postAbonne(ab: Abonne) {
    return this.http.post(this.url, ab);
  }

  delete(id: number) {
    this.http.delete(this.url + '/'+id);
    }


  fetchAbonne(id: number) {
    return this.http.get(this.url+id);

  }
  editAbonne(id: number, a: Abonne) {
    return this.http.put(this.url+id, a);
  }

  
}
