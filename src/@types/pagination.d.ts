interface IPagination {
  currentPage: number;
  limit: number;
  numPages: number;
  skip: number;
  category: string;
  pagePath: string;
}
