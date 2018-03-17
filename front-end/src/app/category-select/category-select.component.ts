import { Component, Input, OnInit } from '@angular/core';
import {CategoryComponent} from '../category/category.component';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent implements OnInit {
categorylist=[{id:1,name:"Algorithm"},
{id:2,name:"Data Structure"},
{id:3,name:"DBMS"}];
@Input() showMePartially: boolean;
  constructor() {
  }

  ngOnInit() {

  }

}
