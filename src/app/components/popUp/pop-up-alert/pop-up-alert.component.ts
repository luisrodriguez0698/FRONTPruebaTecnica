import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFormDataEmail } from 'src/app/interface/dataEmail';

@Component({
  selector: 'app-pop-up-alert',
  templateUrl: './pop-up-alert.component.html',
  styleUrls: ['./pop-up-alert.component.scss']
})
export class PopUpAlertComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IFormDataEmail) {
    console.log(data);
  }

}
