import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent implements OnInit {
<<<<<<< HEAD
categorylist = [{id: 1 , name: 'Algorithm'},
{id: 2 , name: 'Data Structure'},
{id: 3 , name: 'DBMS'}];
=======
categorylist = [{
                id: 1 ,
                name: 'Algorithm'
              },  {
                id: 2,
                name: 'Data Structure'
              }, {
                id: 3,
                name: 'DBMS'
              }];

@Input() showMePartially: boolean;
>>>>>>> 99d80ec88fe3f12cf39804256868ba47e3fcabe2
  constructor() {
  }

  ngOnInit() {
  }

}
