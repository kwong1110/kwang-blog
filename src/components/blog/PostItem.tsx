import { PostItemStyle } from './PostItemStyle';

type PostItemProps = {
  category: ICategory;
};

const PostItem = ({ category }: PostItemProps) => {
  return (
    <div css={PostItemStyle}>
      {category.fieldValue}({category.totalCount})
    </div>
  );
};

export default PostItem;
