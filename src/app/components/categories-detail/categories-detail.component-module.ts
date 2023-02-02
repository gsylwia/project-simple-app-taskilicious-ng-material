import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesDetailComponent } from './categories-detail.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  declarations: [CategoriesDetailComponent],
  providers: [],
  exports: [CategoriesDetailComponent]
})
export class CategoriesDetailComponentModule {
}
