import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  currentCategory: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {

    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });

  }

  setCurrentCategory(category: Category): void {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category): string {
    if (category === this.currentCategory) {
      return 'list-group-item active';
    }
    return 'list-group-item';
  }

  getAllCategoryClass(): any {
    if (!this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  clearCurrentCategory() {
    this.currentCategory = null;
  }

}
