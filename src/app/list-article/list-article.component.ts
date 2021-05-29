import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
 
  listArticles: Article[];
  article: Article;
  stockZero: number;
  constructor(private articleService: ArticleService){}


  ngOnInit(): void {
    
    this.article = new Article(); 
    this.articleService.getArticles().subscribe( 
    (data: Article[]) => this.listArticles = data
    
    );
  }

  save(){
    this.articleService.postArticle(this.article).subscribe(
      () => this.listArticles=[this.article, ...this.listArticles]

    );
  }
  
  supprimerArticle(article: Article){
    let i = this.listArticles.indexOf(article);
    this.listArticles.splice(i, 1);   
   }
  


}
