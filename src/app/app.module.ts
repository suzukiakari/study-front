import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopComponent } from './component/top/top.component';
import { LinkStyleDirective } from './directive/link-style.directive';
import { LinkStyleBoxDirective } from './directive/link-style-box.directive';

const routes:Routes = [
  { path: '', component: TopComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    LinkStyleDirective,
    LinkStyleBoxDirective
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
