import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.interface';
import { BookService } from '../../service/book.service';
import { ResponseInfo } from '../../models/response-info.interface';
import { Utilidad } from '../../shared/utils/utilidad';

const ELEMENT_DATA: Book[] = [];

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})
export class BookTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'idCliente', 'titulo', 'completo'];
  dataSource: Book[] = ELEMENT_DATA;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService
      .getAllBook()
      .subscribe({
        next: (res: ResponseInfo) => {
          if (res && res.data) {
            for (const item of res.data) {
              this.dataSource.push(item);
            }
          }
        },
        error: (err) => console.error('Error al obtener datos:', err)
      });
  }

  public convertirBooleano(valor: boolean): string {
    return Utilidad.convertirBooleano(valor);
  }
}
