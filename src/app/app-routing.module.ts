import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesFormCreateComponent } from './components/categories-form-create/categories-form-create.component';
import { CategoriesFormEditComponent } from './components/categories-form-edit/categories-form-edit.component';
import { CategoriesDetailComponent } from './components/categories-detail/categories-detail.component';
import { TaskFormCreateComponent } from './components/task-form-create/task-form-create.component';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesFormCreateComponentModule } from './components/categories-form-create/categories-form-create.component-module';
import { CategoriesFormEditComponentModule } from './components/categories-form-edit/categories-form-edit.component-module';
import { CategoriesDetailComponentModule } from './components/categories-detail/categories-detail.component-module';
import { TaskFormCreateComponentModule } from './components/task-form-create/task-form-create.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', component: CategoriesComponent }, { path: 'categories/create', component: CategoriesFormCreateComponent }, { path: 'categories/edit/:id', component: CategoriesFormEditComponent }, { path: 'undefined', component: CategoriesComponent }, { path: 'categories/:id', component: CategoriesDetailComponent }, { path: 'tasks/create', component: TaskFormCreateComponent }]), CategoriesComponentModule, CategoriesFormCreateComponentModule, CategoriesFormEditComponentModule, CategoriesDetailComponentModule, TaskFormCreateComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
