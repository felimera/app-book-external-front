import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.interface';
import { CustomerService } from '../../service/customer.service';
import { ResponseInfo } from '../../models/response-info.interface';

const ELEMENT_DATA: Customer[] = [];

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css'
})
export class CustomerTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'nombreUsuario', 'correo', 'telefono', 'sitioWeb'];
  dataSource: Customer[] = ELEMENT_DATA;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService
      .getAllCustomer()
      .subscribe({
        next:
          (datos: ResponseInfo) => {
            if (datos && datos.data) {
              for (const item of datos.data)
                this.dataSource.push(item);
            }
          },
        error: (err) => console.log('Error al obtener datos:', err)
      });
  }

}
