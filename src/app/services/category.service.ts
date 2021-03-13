import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = 'https://localhost:44370/api/categories/getall';

  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpClient
      .get<ListResponseModel<Category>>(this.apiUrl);
  }

}
