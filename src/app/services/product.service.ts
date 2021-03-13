import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = 'https://localhost:44370/api/';

  getProducts(): Observable<ListResponseModel<Product>> {
    const newPath = this.apiUrl + 'products/getall';
    return this.httpClient
      .get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId: number): Observable<ListResponseModel<Product>> {
    const newPath = this.apiUrl + 'products/getbycategory?categoryId=' + categoryId;
    return this.httpClient
      .get<ListResponseModel<Product>>(newPath);
  }

}
