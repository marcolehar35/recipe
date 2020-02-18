import slugify from 'slugify';

export const getSlugFromString = (string) => {
  const slug = slugify(string, {
    remove: /[*+~.()'"!:@]/g, // regex to remove characters
    lower: true, // result in lower case
  });

  return slug;
};

export const getUrl = (prefix, string) => {
  return `/${prefix}/${getSlugFromString(string)}`;
};

export const getRecipeFromSlug = (list, slug) => {
  // je veux la recette dont le titre transformé en slug est le même que le slug fournit
  return list.find((recipe) => getSlugFromString(recipe.title) === slug);
};
