import { Component, OnInit } from '@angular/core';
import { Step } from 'src/app/model/step';

import { StepService } from 'src/app/service/step/step-service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  steps : Step[];

  constructor(private stepService:StepService) {
    this.steps = new Array(); 
  }

  ngOnInit(): void {
    this.stepService.stepsAll().subscribe(data => this.steps = data);
  }
}

