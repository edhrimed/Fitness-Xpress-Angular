import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Article} from '../model/article';
import { ArticleService } from '../shared/services/article.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 
  articleList: Article[];
  prixMax: number;
  stockZero: number;
  
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(
      (data: Article[]) => this.articleList = data
    );

}


getStockZero(){
  this.stockZero = this.articleService.getStockZero(this.articleList, 'quantite', 0);

}


supprimerArticle(article: Article){
  let i = this.articleList.indexOf(article);
  this.articleList.splice(i, 1);   
 }

 ajouterLike(article: Article){
  this.articleService.ajouterLike(article).subscribe()
 }

 getColor(i){
  console.log(i)
 }

acheterArticle(article : Article){
  this.articleService.acheterArticle(article).subscribe()

}

}
