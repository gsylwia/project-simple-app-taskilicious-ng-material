import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CategoryModel } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-detail',
  styleUrls: ['./categories-detail.component.scss'],
  templateUrl: './categories-detail.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesDetailComponent {
  readonly details$: Observable<CategoryModel> = this._activatedRoute.params.pipe(switchMap(data => this._categoriesService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _categoriesService: CategoriesService) {
  }
}
