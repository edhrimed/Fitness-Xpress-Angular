import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Article} from '../model/article';
import { StoreService } from '../services/store.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url = 'http://127.0.0.1:3000/articles/';

   constructor( private http: HttpClient) { }

   getArticles(){
    return this.http.get<Article[]>(this.url);
  }

  postArticle(a: Article){
    return this.http.post(this.url, a);
  }

 
}


