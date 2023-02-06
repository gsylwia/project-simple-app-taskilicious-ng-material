import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CategoryModel } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form-create',
  styleUrls: ['./task-form-create.component.scss'],
  templateUrl: './task-form-create.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFormCreateComponent {
  readonly taskForm: FormGroup = new FormGroup({
    name: new FormControl(),
    categoryId: new FormControl()
  });

  readonly category$: Observable<CategoryModel[]> = this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService, private _taskService: TaskService, private _router: Router) {
  }

  onTaskFormSubmitted(taskForm: FormGroup): void {
    this._taskService.create({
      name: taskForm.get('name')?.value,
      categoryId: taskForm.get('categoryId')?.value,
      id: taskForm.get('id')?.value
    })
      .subscribe(() => this._router.navigate([`categories/${this.taskForm.get('categoryId')?.value}`]));
  }
}
