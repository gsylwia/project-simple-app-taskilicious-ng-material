import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-form-create',
  styleUrls: ['./categories-form-create.component.scss'],
  templateUrl: './categories-form-create.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesFormCreateComponent {
  readonly categoryForm: FormGroup = new FormGroup({ name: new FormControl() });

  constructor(private _categoriesService: CategoriesService, private _router: Router) {
  }

  onCategoryFormSubmitted(categoryForm: FormGroup): void {

    if (!categoryForm.valid) {
      return;
    }
    this._categoriesService.create({ id: categoryForm.get('id')?.value, name: categoryForm.get('name')?.value }).subscribe(() => this._router.navigate(['']));
  }
}
