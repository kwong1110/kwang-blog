import { useCategoryList } from 'graphql/use-categoryList';
import PostItem from './PostItem';

const PostList = () => {
  const categories = useCategoryList();
  const descCategories = categories.sort((a, b) => b.totalCount - a.totalCount);
  return (
    <div>
      <div>카테고리 목록</div>
      {descCategories.map((category, key) => (
        <PostItem key={key} category={category} />
      ))}
    </div>
  );
};

export default PostList;
