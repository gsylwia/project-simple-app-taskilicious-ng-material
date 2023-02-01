import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesComponent } from './categories.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule, MatIconModule,RouterModule],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {
}
