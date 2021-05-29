import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../../model/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url = 'http://127.0.0.1:3000/articles/';

   
   articleList: Article[];
   i: number;

   constructor( private http: HttpClient) { }

   getArticles(){
    return this.http.get<Article[]>(this.url);
  }

  postArticle(a: Article){
    return this.http.post(this.url, a);
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
  
  
  acheterArticle(article: Article){
    article.quantite--;
    return this.http.post(`${this.url}${article.id}`, article);
  }
  
  ajouterLike(article: Article){
    if(!article.like){
      article.like = 0
    }
    article.like++;
    return this.http.post(`${this.url}${article.id}`, article);
  }
  
  getColor(i: number){
    if (this.articleList[i].quantite===0){
      return 'red';
    }
  }


 
 
}
