import { CategoryItemStyle } from './CategoryItemStyle';

type CategoryItemProps = {
  category: ICategory;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div css={CategoryItemStyle}>
      {category.fieldValue}({category.totalCount})
    </div>
  );
};

export default CategoryItem;
