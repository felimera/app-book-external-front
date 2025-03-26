import { GeoDto } from "./geo.interface";

export interface AddressDto {
  calle: string;
  suite: string;
  ciudad: string;
  codigoPostal: string;
  geoDto: GeoDto;
}
