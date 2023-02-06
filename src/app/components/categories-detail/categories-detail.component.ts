import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { CategoryModel } from '../../models/category.model';
import { TasksModel } from '../../models/tasks.model';
import { CategoriesService } from '../../services/categories.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-categories-detail',
  styleUrls: ['./categories-detail.component.scss'],
  templateUrl: './categories-detail.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesDetailComponent {
  readonly details$: Observable<CategoryModel> = this._activatedRoute.params.pipe(switchMap(data => this._categoriesService.getOne(data['id'])));

  readonly tasks$: Observable<TasksModel[]> = combineLatest([
    this._taskService.getAll(),
    this._activatedRoute.params
  ]).pipe(
    map(([taskList, params]: [TasksModel[], Params]) => {
      return taskList.filter(((task: TasksModel) => task.categoryId === params['id']))
    })
  );

  private _deleteSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public tasksList$: Observable<TasksModel[]> = this._deleteSubject.asObservable().pipe(switchMap(()=> this.tasks$));

  onRemoveButtonClicked(id: string) {
    this._taskService.delete(id).subscribe( () => this._deleteSubject.next());
  }

  constructor(private _activatedRoute: ActivatedRoute, private _categoriesService: CategoriesService, private _taskService: TaskService) {
  }
}
