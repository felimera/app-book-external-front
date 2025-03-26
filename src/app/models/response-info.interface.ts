import { Meta } from "./meta.interface"
import { Pagination } from "./pagination.interface"

export interface ResponseInfo {
  meta: Meta;
  data: any[];
  pagination: Pagination;
}
