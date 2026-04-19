const API ="http://localhost:8000/api/V1/auth";

export const loginUser = async (email, password) => {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    credentials: "include", // 🔥 required for cookies
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  return res.json();
};

export const refreshToken = async () => {
  const res = await fetch(`${API}/refresh`, {
    method: "POST",
    credentials: "include",
  });

  return res.json();
};