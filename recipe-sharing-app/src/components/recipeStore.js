import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  favorites: [],
  recommendations: [],

  /* ---------- Recipe Actions ---------- */
  addRecipe: (newRecipe) =>
    set((state) => {
      const recipes = [...state.recipes, newRecipe];
      return {
        recipes,
        filteredRecipes: recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const recipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes,
        filteredRecipes: recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const recipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes,
        favorites: state.favorites.filter((favId) => favId !== id),
        filteredRecipes: recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  /* ---------- Favorites ---------- */
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  /* ---------- Recommendations ---------- */
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // Simple recommendation logic:
    // Recommend non-favorite recipes when user has favorites
    const recommendations = recipes.filter(
      (recipe) => !favorites.includes(recipe.id) && Math.random() > 0.4
    );

    set({ recommendations });
  },
}));
