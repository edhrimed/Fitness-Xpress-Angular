import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Article } from '../model/article';


@Injectable({
  providedIn: 'root'
})
export class StoreService {


  constructor() {

   }

  getStockZero(list: any[], critiria: string, value: any){
    let n= 0;
    for (let i in list){
      if (list [i][critiria]=== value){
        n++;
      }
    }
    return n;
  }

  
}
