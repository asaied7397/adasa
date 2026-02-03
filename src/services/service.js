import data from "../data/posts.json";

const posts = data.posts;

export function getAllPosts() {
  return posts;
}

export function getPostById(id) {
  const idNum = Number(id);
  return posts.find((post) => post.id === idNum);
}

export function getCategories() {
  const categories = posts?.map((post) => post.category).filter(Boolean);
  // console.log(categories);
  return ["جميع المقالات", ...Array.from(new Set(categories))];
}

export function getPostsByCategory(category) {
  return posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase(),
  );
}
