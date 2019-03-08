import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from './components/app-button/app-button.component';

@NgModule({
  declarations: [AppButtonComponent],
  exports: [AppButtonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
