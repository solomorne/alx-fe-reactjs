import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
      ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      : undefined,
  },
});

/**
 * Fetch a single user's full data
 */
export const fetchUserData = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};

/**
 * Advanced user search (username, location, min repos)
 */
export const searchUsers = async (
  { username, location, minRepos },
  page = 1
) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await githubApi.get(
    `/search/users?q=${query}&page=${page}&per_page=10`
  );

  return response.data;
};
