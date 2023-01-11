import { Component, Input, OnInit } from '@angular/core';
export type Size =  'medium';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})


export class ButtonComponent implements OnInit {

  @Input() size: Size = 'medium';

  constructor() { }

  ngOnInit(): void {
  }

  //メソッド名の前にgetをつけるとインスタンス変数を定義してgetterを定義したのと同一の事になる
  get style() {
    //外部から指定するデータが複数あるとき、`${this.size} ${this.color}`のように書く
    return this.size;
  }
}
