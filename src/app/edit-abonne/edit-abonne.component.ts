import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abonne } from '../model/Abonne';
import { AbonneService } from '../shared/services/abonne.service';


@Component({
  selector: 'app-edit-abonne',
  templateUrl: './edit-abonne.component.html',
  styleUrls: ['./edit-abonne.component.css']
})
export class EditAbonneComponent implements OnInit {


  url = 'http://localhost:3000/abonnes/';
  id: number;
  abonne: Abonne;

  constructor(private route: ActivatedRoute, private router: Router, private abonneService: AbonneService) { }

  ngOnInit(): void {
    this.abonne = new Abonne();

    this.abonneService.fetchAbonne(this.route.snapshot.params.id)
      .subscribe((abonne: Abonne) => {
        console.log(abonne)
        this.abonne = abonne;
      });

    this.id = this.route.snapshot.params.id;

  }

  updateAbonne() {
  this.abonneService.editAbonne(this.route.snapshot.params.id, this.abonne)
  .subscribe();
window.location.pathname = '/abonnes';
 
}
 



}
