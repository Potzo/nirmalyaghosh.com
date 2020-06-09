import IArticle from "types/article";

declare module "remark-autolink-headings";
declare module "remark-slug";
declare module "remark-code-titles";
declare module "next-mdx-enhanced";
declare module "mdx-prism";

declare module "*.mdx" {
  export const frontMatter: IArticle[];
}