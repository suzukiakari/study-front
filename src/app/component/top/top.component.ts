import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Step } from 'src/app/model/step';

import { StepServiceService } from 'src/app/service/step/step-service.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  steps : Step[];

  constructor(private stepService:StepServiceService) {
    this.steps = new Array(); 
  }

  ngOnInit(): void {
    this.steps = this.stepService.stepsAll();
  }
}

