import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './pipes/phone-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { DefaultTableComponent } from './components/dynamic-table/dynamic-table.component';



@NgModule({
  declarations: [
    PhonePipe, 
    DefaultTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule, 
    DefaultTableComponent,
  ],
  providers: [  
    PhonePipe
  ]
})
export class SharedModule { }
