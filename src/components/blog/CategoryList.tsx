import { useCategoryList } from 'graphql/use-categoryList';
import CategoryItem from './CategoryItem';

type CategoryListType = {
  pagePath: string;
};

const CategoryList = ({ pagePath }: CategoryListType) => {
  const { group: categories, totalCount } = useCategoryList();

  const descCategories = categories.sort((a, b) => b.totalCount - a.totalCount);

  return (
    <div>
      <div>카테고리 목록</div>
      <CategoryItem
        category={{ fieldValue: '전체', totalCount }}
        isAll
        pagePath={pagePath}
      />
      {descCategories.map((category, key) => (
        <CategoryItem key={key} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
