import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookCategory } from '../../models/bookcategory.interface';
import { Book } from '../../models/book.interface';
import { BookService } from '../../service/book.service';
import { ResponseInfo } from '../../models/response-info.interface';
import { categoryDto } from '../../models/category.interface';
import { CategoryService } from '../../service/category.service';
import { BookcategoryService } from '../../service/bookcategory.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {

  disableSelect = new FormControl(false);
  formulario: FormGroup;
  public books: Book[] = [];
  public categories: categoryDto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private categoryService: CategoryService,
    private bookCategoryService: BookcategoryService
  ) {
    this.formulario = this.formBuilder.group({
      id: [0],
      idBookInter: [0, Validators.required],
      idCategory: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarLibros();
    this.cargarCategorias();
  }

  public onSubmit(): void {
    console.log('this.formulario.value ', this.formulario.value);
    this.bookCategoryService
      .postBookCategory(this.formulario.value)
      .subscribe({
        next: (value: ResponseInfo) => console.log(value),
        error: (err) => console.log(err),
      })
  }

  public cargarLibros(): void {
    this.bookService
      .getAllBook()
      .subscribe({
        next: (value: ResponseInfo) => {
          if (value && value.data) {
            for (const item of value.data)
              this.books.push(item);
          }
        },
        error: (err) => console.log(err)
      });
  }

  public cargarCategorias(): void {
    this.categoryService
      .getAllCategory()
      .subscribe({
        next: (value: ResponseInfo) => {
          if (value && value.data) {
            for (const item of value.data)
              this.categories.push(item);
          }
        },
        error: (err) => console.log(err)
      });
  }
}
