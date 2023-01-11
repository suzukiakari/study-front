import { Component, OnInit } from '@angular/core';
import { Step } from 'src/app/model/step';
import { Router } from '@angular/router';

import { StepService } from 'src/app/service/step/step-service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  steps : Step[];

  constructor(private router:Router, private stepService:StepService) {
    this.steps = new Array(); 
  }

  ngOnInit(): void {
    this.stepService.stepsAll().subscribe(data => this.steps = data);
  }
  onButtonClick(link :string) {
    // 問題ページへ飛ぶように実装
    //メソッド名適当なものに変更する
    this.router.navigate([link]);
  }
}

