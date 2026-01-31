import { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    minRepos: "",
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);

    try {
      const data = await searchUsers(formData, 1);
      setUsers(data.items);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    const data = await searchUsers(formData, nextPage);
    setUsers((prev) => [...prev, ...data.items]);
    setPage(nextPage);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:grid-cols-3 mb-6"
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Min Repos"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="md:col-span-3 bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Looks like we cant find the user</p>}

      <ul className="grid gap-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center gap-4 border p-4 rounded"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-sm"
              >
                View Profile
              </a>
            </div>
          </li>
        ))}
      </ul>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="block mx-auto mt-6 bg-gray-200 px-6 py-2 rounded hover:bg-gray-300"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
