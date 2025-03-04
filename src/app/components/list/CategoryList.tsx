import { CategoryDetail } from "app/config/types";

type Props = {
  allPostCount: number;
  categoryList: CategoryDetail[];
  currentCategory?: string;
};

const CategoryList = ({ allPostCount, categoryList, currentCategory }: Props) => {
  return <div></div>;
};

export default CategoryList;
