import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesFormCreateComponent } from './components/categories-form-create/categories-form-create.component';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesFormCreateComponentModule } from './components/categories-form-create/categories-form-create.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', component: CategoriesComponent }, { path: 'categories/create', component: CategoriesFormCreateComponent }]), CategoriesComponentModule, CategoriesFormCreateComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
