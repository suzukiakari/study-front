import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseCategory } from 'src/app/model/courseCategory';
import { CourseService } from 'src/app/service/course/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseCategoryList : CourseCategory[];
  count : number;

  constructor(private router:Router, private courseService:CourseService) { 
    this.courseCategoryList = new Array();
    this.count = 0;
  }

  ngOnInit(): void {
    this.courseService.courseAll().subscribe(data => {
      this.courseCategoryList = data
    });
  }

  onButtonClick() {
    // 問題ページへ飛ぶように実装
    //メソッド名適当なものに変更する
    this.router.navigate(['']);
  }
}
