import { useCategoryList } from 'graphql/use-categoryList';
import CategoryItem from './CategoryItem';

const CategoryList = () => {
  const categories = useCategoryList();
  const descCategories = categories.sort((a, b) => b.totalCount - a.totalCount);
  return (
    <div>
      <div>카테고리 목록</div>
      {descCategories.map((category, key) => (
        <CategoryItem key={key} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
