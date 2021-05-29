import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training } from 'src/app/model/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  url='http://127.0.0.1:3000/training/'
  
  constructor( private http:HttpClient ) { }

  getTraining(){
   
    return this.http.get<Training[]>(this.url);
  }

  postTraining(t: Training){
    return this.http.post(this.url, t);

  }

  deleteTraining(id: number){
    return this.http.delete(this.url + id);
  }

  update(id: number, t: Training) {
    return this.http.put(this.url + id, t);
  }
  serach(id: number){
    return this.http.get<Training>(this.url + id);
  }

 


 



}
