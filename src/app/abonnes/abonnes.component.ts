import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Abonne } from '../model/Abonne';
import { AbonneService } from '../shared/services/abonne.service';

@Component({
  selector: 'app-abonnes',
  templateUrl: './abonnes.component.html',
  styleUrls: ['./abonnes.component.css']
})
export class AbonnesComponent implements OnInit {

  listAbonnes: Abonne[];
  abonne: Abonne;
  totalAbonnes: number;
  constructor(private abonneService: AbonneService) { }

  ngOnInit(): void {
     this.abonne = new Abonne();
   
    this.abonneService.getAbonne().subscribe( 
    (data: Abonne[]) => this.listAbonnes = data
    
    );


  }


  save() {
    this.abonneService.postAbonne(this.abonne).subscribe(
      () => this.listAbonnes=[this.abonne, ...this.listAbonnes]
    );

    console.log('login');
  }

  deleteAbonne(ab: Abonne){
    let i = this.listAbonnes.indexOf(ab);
    this.listAbonnes.splice(i, 1);   
   }

  update(){
 
  }


}
