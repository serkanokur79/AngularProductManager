import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = 'https://localhost:44370/api/products/getall';

  getProducts(): Observable<ProductResponseModel> {
    return this.httpClient
      .get<ProductResponseModel>(this.apiUrl);
  }

}
