import { SortConfig } from "../Types/SortConfig";

export function sortedData<T extends Record<string, any>>( // eslint-disable-line
  data: T[],
  sortConfig: SortConfig<T>
): T[] {
  const sortingData = data.slice().sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "descending" ? 1 : -1;
    }
    return 0;
  });
  return sortingData;
}
