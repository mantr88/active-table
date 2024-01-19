import { SortDirection } from "./sortDirection";

export interface SortConfig<T> {
  key: keyof T;
  direction: SortDirection;
}
