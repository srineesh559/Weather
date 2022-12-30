import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPopupComponent } from './pop-up/confirm-pop-up/confirm-popup/confirm-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  exports: [HeaderComponent],

  declarations: [ConfirmPopupComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    MatSelectModule,
  ],
})
export class CoreModule {}
