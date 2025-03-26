import { SubCategoryDto } from "./subcategory.interface";

export interface categoryDto {
  id: number;
  nombre: string;
  descripcion: string;
  subCategoryDtos: SubCategoryDto[];
}
