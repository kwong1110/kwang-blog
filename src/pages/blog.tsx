import { useCategoryList } from 'graphql/use-categoryList';

const blog = () => {
  const categorys = useCategoryList();
  return (
    <div>
      <div>blog입니다.</div>
      <div>카테고리 목록</div>
      {categorys.map((category, key) => (
        <span key={key}>{category.fieldValue}</span>
      ))}
    </div>
  );
};

export default blog;
