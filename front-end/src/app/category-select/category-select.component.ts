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
  gradientCounter = 0;
  rand: any[] = [];
  randBackground: any;
  categorylist: any;
  isGradColorCalled = false;
  dialogRef: MatDialogRef<AddNewCategoryDialogComponent>;
  @Input() showMePartially: boolean;
  constructor(private _dialog: MatDialog, private http?: HttpWrapperService) {
    this.http.get('http://vishalranjan.in:1830/quizapp/api/category').subscribe(response => {
    console.log(response);
    this.categorylist = response;
  });
}
gradColor() {
  this.isGradColorCalled = true;
  const color = [ 'linear-gradient(120deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
  'linear-gradient(120deg, #E6FF89 0%, #D2FF28 51%, #DEFF62 75%)',
  'linear-gradient(120deg, #9900FF 0%, #9933FF 51%, #9966FF 75%)',
  'linear-gradient(120deg, #FF9900 0%, #FFCC00 51%, #FFFF00 75%)',
  'linear-gradient(120deg, #C6BAC7 0%, #DCCFDD 51%, #F1E3F3 75%)',
  'linear-gradient(120deg, #BF98A0 0%, #D6BDC2 51%, #DCC6CB 75%)',
  'linear-gradient(120deg, #6DD1A3 0%, #79E8B5 51%, #85FFC7 75%)',
  'linear-gradient(120deg, #FF82A9 0%, #FFA4C0 51%, #FFBAD0 75%)',
  'linear-gradient(120deg, #56CBF9 0%, #A2E2FB 51%, #B2E7FC 75%)',
  'linear-gradient(120deg, #E4BE9E 0%, #E6C3A6 51%, #EDD5C1 75%)'];
  for (let i = 0; i < this.categorylist.length; i++) {
    if (this.gradientCounter === 10) {
      this.gradientCounter = 0;
    }
    this.rand[i] = color[this.gradientCounter];
    this.gradientCounter++;
  }
}
addNewCategory(): void {
  this.dialogRef = this._dialog.open(AddNewCategoryDialogComponent, {
    width : '500px' ,
    hasBackdrop : false
  });
}
editCategory() {
  // this.http.put
}
bgChange(index) {
  if (this.isGradColorCalled === false) {
    this.gradColor();
  }
  this.randBackground = {
    'background': this.rand[index]
  };
  return this.randBackground;
}
ngOnInit() {
}

}
