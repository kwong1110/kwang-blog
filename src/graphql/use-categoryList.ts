import { useStaticQuery, graphql } from 'gatsby';

type CategoryListProps = {
  categoryList: {
    group: { fieldValue: string; totalCount: number }[];
  };
};

export const useCategoryList = () => {
  const { categoryList } = useStaticQuery<CategoryListProps>(
    graphql`
      query {
        categoryList: allMarkdownRemark(limit: 100) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );
  return categoryList.group;
};
