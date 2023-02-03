import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { CategoryModel } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-form-edit',
  styleUrls: ['./categories-form-edit.component.scss'],
  templateUrl: './categories-form-edit.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesFormEditComponent {
  readonly details$: Observable<CategoryModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._categoriesService.getOne(data['id'])),
    take(1),
    tap((data: CategoryModel) => this.categoryForm.patchValue(data))
  )
  readonly categoryForm: FormGroup = new FormGroup({ name: new FormControl() });

  constructor(private _activatedRoute: ActivatedRoute, private _categoriesService: CategoriesService, private _router: Router) {
    this.details$.subscribe();
  }

  onCategoryFormSubmitted(categoryForm: FormGroup): void {
    this._activatedRoute.params.
      pipe(
        take(1),
        switchMap((data) =>
          this._categoriesService.update({ id: data['id'], ...categoryForm.value })
        ))
      .subscribe( () => this._router.navigate(['']));
  }
}
