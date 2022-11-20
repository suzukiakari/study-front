import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map, Observable, of } from 'rxjs';
import { Step } from 'src/app/model/step';


@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor(private httpClient: HttpClient) {}
  
  steps() : Observable<Step[]> {
    return this.httpClient.get<Step[]>("http://localhost:8080/steps/")
  }

  // steps(): Observable<Step[]> {
  //   const dummyData : Step[] = [
  //     {
  //       id: 1,
  //       name: '問題を解こう', 
  //       explanation: 'まずは問題を解こう',
  //       link: 'answer',
  //       stepNo: 1,
  //       icon: "step1.png"
  //     },
  //     { 
  //       id: 2,
  //       name: '問題を作ろう', 
  //       explanation:  '問題を作るのも技術力向上！',
  //       link:  'make',
  //       stepNo: 2,
  //       icon: "step2.png"
  //     },
  //     {
  //       id: 3,
  //       name: '公開されている問題にコメントしよう', 
  //       explanation:   '公開されている問題についてコメントしてみよう',
  //       link: 'comment',
  //       stepNo: 3,
  //       icon: "step3.png"
  //     }
  //   ];
  //   return of(dummyData);
  // }

  public stepsAll() : Observable<Step[]> {
    var stepAllData:Step[]= new Array();
    return this.steps().pipe(
      map(steps => {
          for(let data of steps) {
            const stepData = {
              id: data.id,
              name: data.name, 
              explanation:  data.explanation,
              link:  data.link,
              stepNo: data.stepNo,
              icon: data.icon
            }
            stepAllData.push(stepData);
          }
        return stepAllData;
      })
    )
  }
  
}

