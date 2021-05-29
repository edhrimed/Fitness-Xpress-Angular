import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArtComponent } from './art/art.component';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { TrainingComponent } from './training/training.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { HttpClientModule } from '@angular/common/http';
import { AbonnesComponent } from './abonnes/abonnes.component';
import { EditAbonneComponent } from './edit-abonne/edit-abonne.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


const routes: Routes = [
  {path: 'acceuil', component: AcceuilComponent },
  {path: 'services', component: HomeComponent },
  {path: 'articles', component: ListArticleComponent },
  {path: 'training', component: TrainingComponent },
  {path: 'abonnes', component: AbonnesComponent },
  {path: 'editabonne/:id', component: EditAbonneComponent },
  {path: '**', component: NotfoundComponent }
    
  ];
  
@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ArtComponent,
    NotfoundComponent,
    TrainingComponent,
    ListArticleComponent,
    AbonnesComponent,
    EditAbonneComponent,
    AcceuilComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
