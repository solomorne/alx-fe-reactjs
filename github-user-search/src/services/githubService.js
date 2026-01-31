import axios from "axios";

/**
 * Fetch a single user's full data
 */
export const fetchUserData = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}`,
    {
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : undefined,
      },
    }
  );

  return response.data;
};

/**
 * Advanced user search using GitHub Search API
 * Endpoint explicitly includes:
 * https://api.github.com/search/users?q
 */
export const searchUsers = async (
  { username, location, minRepos },
  page = 1
) => {
  let query = "";

  if (username) query += username;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`,
    {
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : undefined,
      },
    }
  );

  return response.data;
};
