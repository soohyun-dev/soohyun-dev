import PostListPage from "app/components/list/PostListPage";
import { getCategoryList, getCategoryPublicName } from "lib/posts";
import { Metadata } from "next";

type Props = {
  params: { category: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export function generateStaticParams() {
  const categoryList = getCategoryList();
  const paramList = categoryList.map((category) => ({ category }));
  return paramList;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cg = getCategoryPublicName(category);
  const title = `${cg} | ${""}`;
  const url = `${""}/${category}`;

  return {
    title,
    openGraph: {
      title,
      url,
      images: [],
    },
    twitter: {
      title,
      images: [],
    },
  };
}

const CategoryPage = async ({ params }: Props) => {
  const { category } = await params;
  return <PostListPage category={category} />;
};

export default CategoryPage;
