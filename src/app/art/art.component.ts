import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../model/article';



@Component({
  selector: 'app-art',
  templateUrl: './art.component.html', 
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  
  @Input()articleFils: Article;
  @Output() eventSupprimer = new EventEmitter<Article>();
  articleList: Article;

  
  constructor() {}

  ngOnInit(): void {}

  sendNotifParent(){
    this.eventSupprimer.emit(this.articleFils);
          
  }

}
