import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Category } from '../core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

/** Edit Category Page */
export class CategoryComponent implements OnInit {

  categorylist: Category[]=[];

  categoryForm = new FormGroup({
    CategorySlug: new FormControl(''),
    CategoryDescription: new FormControl(''),
    CategoryImageUrl: new FormControl(''),
    CategoryParent: new FormControl(''),
  });

  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }
  saveForm() {
    this.createCategory();
  }
  getCategories(){

    this.apiService.getCategories().subscribe(
      (result: any) => {
        this.categorylist=result;
      },
      error => console.log(error)
    );

  }
  onFileChange(event:any) {

    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.categoryForm.patchValue({
          CategoryFeaturedImageFile: reader.result
        });
      };
    }
  }
  createCategory() {
    console.log('value',this.categoryForm.value);
    this.apiService.createCategory(this.categoryForm.value).subscribe(
      (result: any) => {
        console.log('create',result);
        this.router.navigate(['']);
      },
      error => console.log(error)
    );
  }
}
