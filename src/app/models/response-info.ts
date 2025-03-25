import { Meta } from "./meta"
import { Pagination } from "./pagination"

export interface ResponseInfo {
  meta: Meta;
  data: any[];
  pagination: Pagination;
}
