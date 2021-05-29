import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../model/article';
import { StoreService } from '../services/store.service';
import { ArticleService } from '../shared/services/article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']

})
export class ArticlesComponent implements OnInit {

  articleList: Article[];
  stockZero: number;
  constructor(private articleService: ArticleService ) {}

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
  


 
}

