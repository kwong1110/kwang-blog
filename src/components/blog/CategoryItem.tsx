import { Link } from 'gatsby';
import { toKebabCase } from 'utils/caseStyles';
import { CategoryItemLinkStyle } from './CategoryItemStyle';

type CategoryItemProps = {
  category: ICategory;
  isAll?: boolean;
  pagePath?: string;
};

const CategoryItem = ({ category, isAll, pagePath }: CategoryItemProps) => {
  return (
    <div>
      <Link
        css={CategoryItemLinkStyle}
        to={isAll ? '/blog' : `/blog/${toKebabCase(category.fieldValue)}`}
        partiallyActive={pagePath === '/blog' || !isAll}
        activeStyle={{ background: 'orange' }}
      >
        {category.fieldValue}({category.totalCount})
      </Link>
    </div>
  );
};

export default CategoryItem;
