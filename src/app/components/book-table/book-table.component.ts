import { Component } from '@angular/core';
import { Book } from '../../models/book';

const ELEMENT_DATA: Book[] = [
  { id: 0, idCliente: 0, titulo: 'test', isCompletado: false }
];

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})
export class BookTableComponent {
  displayedColumns: string[] = ['id', 'idCliente', 'titulo', 'completo'];
  dataSource = ELEMENT_DATA;
}
