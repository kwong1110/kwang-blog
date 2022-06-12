import { Link, navigate } from 'gatsby';

type PaginationProps = IPaginstion;

const pageRange = 5;

const goPageLink = (pageNum: number) => {
  if (pageNum !== 1) {
    return `/blog/${pageNum}`;
  }
  return '/blog';
};

const Pagination = ({
  currentPage,
  numPages,
  skip,
  limit,
}: PaginationProps) => {
  const skipPages = Math.floor(skip / limit / pageRange) * pageRange;
  const viewPageRange =
    numPages < skipPages + pageRange ? numPages % pageRange : pageRange;

  const pages = Array.from(
    { length: viewPageRange },
    (_v, index) => index + 1 + skipPages,
  );

  return (
    <div>
      <button
        disabled={currentPage === 1}
        style={{ padding: '0 10px', cursor: 'pointer' }}
        onClick={() => navigate(goPageLink(currentPage - 1))}
      >
        뒤로
      </button>
      {pages.map(num => (
        <Link
          key={num}
          to={goPageLink(num)}
          activeStyle={{ border: '1px solid black' }}
        >
          {num}
        </Link>
      ))}
      <button
        disabled={currentPage === numPages}
        style={{ padding: '0 10px', cursor: 'pointer' }}
        onClick={() => navigate(goPageLink(currentPage + 1))}
      >
        앞으로
      </button>
    </div>
  );
};

export default Pagination;
