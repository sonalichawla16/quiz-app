import { Component, Input, OnInit } from '@angular/core';
import { AddNewTeamDialogComponent } from '../add-new-team-dialog/add-new-team-dialog.component';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent implements OnInit {
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
  constructor() {
  }

  // addNewCategory() : void {
  //   // let dialogBoxRef = this._dialog.open(AddNewTeamDialogComponent ,{
  //   //   width : 
  //   // })
  // }
  ngOnInit() {
  }

}
