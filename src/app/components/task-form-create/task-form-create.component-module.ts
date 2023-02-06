import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { TaskFormCreateComponent } from './task-form-create.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatSelectModule, MatOptionModule, RouterModule],
  declarations: [TaskFormCreateComponent],
  providers: [],
  exports: [TaskFormCreateComponent]
})
export class TaskFormCreateComponentModule {
}
