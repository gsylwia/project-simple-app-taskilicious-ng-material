import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TasksModel } from '../models/tasks.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<TasksModel[]> {
    return this._httpClient.get<TasksModel[]>('https://63761992b5f0e1eb850298da.mockapi.io/tasks');
  }
}
