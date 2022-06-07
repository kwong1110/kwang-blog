import { useStaticQuery, graphql } from 'gatsby';

type CategoryListProps = {
  categoryList: {
    group: ICategory[];
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
        }
      }
    `,
  );
  return categoryList.group;
};
