import { AddressDto } from "./address.interface";
import { CompanyDto } from "./company.interface";

export interface Customer {
  id: number;
  nombre: string;
  nombreUsuario: string;
  correo: string;
  addressDto: AddressDto;
  telefono: string;
  sitioWeb: string;
  companyDto: CompanyDto;
}
