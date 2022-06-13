import { useStaticQuery, graphql } from 'gatsby';

type CategoryListProps = {
  categoryList: {
    group: ICategory[];
    totalCount: number;
  };
};

export const useCategoryList = () => {
  const { categoryList } = useStaticQuery<CategoryListProps>(
    graphql`
      query {
        categoryList: allMdx(limit: 100) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
          totalCount
        }
      }
    `,
  );
  return categoryList;
};
