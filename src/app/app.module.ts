import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopComponent } from './component/top/top.component';
import { LinkStyleDirective } from './directive/link-style.directive';
import { LinkStyleBoxDirective } from './directive/link-style-box.directive';
import { CourseComponent } from './component/course/course.component';
import { ButtonComponent } from './parts/button/button.component';

const routes:Routes = [
  { path: '', component: TopComponent },
  { path: 'course', component: CourseComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    LinkStyleDirective,
    LinkStyleBoxDirective,
    CourseComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
