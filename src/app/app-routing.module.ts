import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesFormCreateComponent } from './components/categories-form-create/categories-form-create.component';
import { CategoriesFormEditComponent } from './components/categories-form-edit/categories-form-edit.component';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesFormCreateComponentModule } from './components/categories-form-create/categories-form-create.component-module';
import { CategoriesFormEditComponentModule } from './components/categories-form-edit/categories-form-edit.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', component: CategoriesComponent }, { path: 'categories/create', component: CategoriesFormCreateComponent }, { path: 'categories/edit/:id', component: CategoriesFormEditComponent }, { path: 'undefined', component: CategoriesComponent }]), CategoriesComponentModule, CategoriesFormCreateComponentModule, CategoriesFormEditComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
