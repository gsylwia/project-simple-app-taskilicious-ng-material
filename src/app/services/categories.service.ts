import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CategoryModel[]> {
    return this._httpClient.get<CategoryModel[]>('https://63761992b5f0e1eb850298da.mockapi.io/categories');
  }

  create(category: CategoryModel): Observable<void> {
    return this._httpClient.post<void>('https://63761992b5f0e1eb850298da.mockapi.io/categories', category);
  }

  getOne(id: string): Observable<CategoryModel> {
    return this._httpClient.get<CategoryModel>('https://63761992b5f0e1eb850298da.mockapi.io/categories/' + id);
  }

  update(categoryForm: CategoryModel): Observable<CategoryModel> {
    return this._httpClient.put<CategoryModel>('https://63761992b5f0e1eb850298da.mockapi.io/categories/' + categoryForm.id, categoryForm);
  }
}
