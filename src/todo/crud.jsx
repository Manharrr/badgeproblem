import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Crud() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  // 🔹 GET
  const getPosts = async () => {
    const res = await axios.get(API_URL);
    setPosts(res.data.slice(0, 5)); // only 5 for demo
  };

  // 🔹 POST
  const createPost = async () => {
    const res = await axios.post(API_URL, {
      title: title,
      body: "New post body",
    });

    setPosts([res.data, ...posts]);
    setTitle("");
  };

  // 🔹 PUT (Full update)
  const updatePost = async (id) => {
    const res = await axios.put(`${API_URL}/${id}`, {
      title: "Updated Title",
      body: "Updated Body",
    });

    setPosts(posts.map(p => (p.id === id ? res.data : p)));
  };

  // 🔹 PATCH (Partial update)
  const patchPost = async (id) => {
    const res = await axios.patch(`${API_URL}/${id}`, {
      title: "Patched Title",
    });

    setPosts(posts.map(p => (p.id === id ? { ...p, ...res.data } : p)));
  };

  // 🔹 DELETE
  const deletePost = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setPosts(posts.filter(p => p.id !== id));
  };

  // Load data on mount
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Axios CRUD Example</h2>

      <input
        value={title}
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createPost}>POST</button>

      <hr />

      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: 10 }}>
          <b>{post.title}</b>
          <br />

          <button onClick={() => updatePost(post.id)}>PUT</button>
          <button onClick={() => patchPost(post.id)}>PATCH</button>
          <button onClick={() => deletePost(post.id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
}

export default Crud;
