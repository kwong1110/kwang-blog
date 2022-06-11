import { Link } from 'gatsby';

type PaginationProps = IPaginstion;

const viewPageCount = 5;

const Pagination = ({ currentPage }: PaginationProps) => {
  const pages = Array.from({ length: viewPageCount });
  return (
    <div>
      {pages.map((_num, index) => (
        <Link
          key={index}
          to={index === 0 ? '/blog' : `/blog/${index + 1}`}
          style={
            currentPage === index + 1
              ? { border: '1px solid black' }
              : undefined
          }
        >
          {index + 1}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
