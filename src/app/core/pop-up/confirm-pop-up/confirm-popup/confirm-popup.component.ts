import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss'],
})
export class ConfirmPopupComponent {
  confirmationString: string = '';
  selectedAlign: 'start' | 'center' | 'end' = 'center';
  constructor(
    private readonly dialogRef: MatDialogRef<ConfirmPopupComponent>
  ) {}

  cancelClick() {
    this.dialogRef.close();
  }

  okClick(event: boolean) {
    this.dialogRef.close(event);
  }
}
