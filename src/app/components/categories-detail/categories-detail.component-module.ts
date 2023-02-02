import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesDetailComponent } from './categories-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CategoriesDetailComponent],
  providers: [],
  exports: [CategoriesDetailComponent]
})
export class CategoriesDetailComponentModule {
}
