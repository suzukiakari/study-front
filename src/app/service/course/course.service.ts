import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http'; 
import { CourseCategory } from 'src/app/model/courseCategory';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  course() : Observable<CourseCategory[]> {
    return this.httpClient.get<CourseCategory[]>("http://localhost:8080/courses/")
  }

  public courseAll() : Observable<CourseCategory[]> {
    return this.course();
  }
}
