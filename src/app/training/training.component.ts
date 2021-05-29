import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { Training } from '../model/training';
import { TrainingService } from '../shared/services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  listTraining: Training[];
  training: Training;
  @Output() saveEvent = new EventEmitter<Training>();

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.training = new Training();
    this.trainingService.getTraining().subscribe(
      (data: Training[]) => this.listTraining = data

    );
  }

  save() {
    this.trainingService.postTraining(this.training).subscribe(
      () => this.listTraining = [this.training, ...this.listTraining]
    );

    console.log('login');
  }

  notify() {

    this.saveEvent.emit(this.training);
  }

  deleteTraining(training: Training) {
    let i = this.listTraining.indexOf(training);
    this.listTraining.splice(i, 1);
  }



}


