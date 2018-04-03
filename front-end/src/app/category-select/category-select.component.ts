import { Component, Input, OnInit } from '@angular/core';
import { AddNewTeamDialogComponent } from '../add-new-team-dialog/add-new-team-dialog.component';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { NgStyle } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddNewCategoryDialogComponent } from '../add-new-category-dialog/add-new-category-dialog.component';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent implements OnInit {
  categorylist: any;
  dialogRef: MatDialogRef<AddNewCategoryDialogComponent>;

@Input() showMePartially: boolean;
  constructor(private _dialog: MatDialog, private http?: HttpWrapperService) {
    this.http.get('http://vishalranjan.in:1830/quizapp/api/category').subscribe(response => {
      console.log(response);
      this.categorylist = response;
     });
  }
  addNewCategory(): void {
    this.dialogRef = this._dialog.open(AddNewCategoryDialogComponent, {
      width : '500px' ,
      hasBackdrop : false
    });
  }
  bgChange() {
    const color = [ 'linear-gradient(120deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
'linear-gradient(120deg, #E6FF89 0%, #D2FF28 51%, #DEFF62 75%)',
'linear-gradient(120deg, #FC8F68 0%, #FB6F3D 51%, #A0330C 75%)',
'linear-gradient(120deg, #9900FF 0%, #9933FF 51%, #9966FF 75%)',
'linear-gradient(120deg, #FF9900 0%, #FFCC00 51%, #FFFF00 75%)',
'linear-gradient(120deg, #FF0000 0%, #FF3300 51%, #FF6600 75%)',
'linear-gradient(120deg, #44001D 0%, #4A001F 51%, #A0330C 75%)',
'linear-gradient(120deg, #8A3269 0%, #944476 51%, #9F5784 75%)',
'linear-gradient(120deg, #2F4B26 0%, #415B39 51%, #546B4D 75%)'];
const rand = color[Math.floor(Math.random() * color.length)];
let randBackground;
randBackground = {
  'background': rand
};
return randBackground;
}
  ngOnInit() {
  }

}
