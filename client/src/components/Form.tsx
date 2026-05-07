import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: formData.email.trim(),
            username: formData.username.trim(),
            password: formData.password
          }),
          signal: controller.signal,
          credentials: 'include' // if cookies/session used
        }
      );

      clearTimeout(timeout);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'Request failed');
      }

      // handle success (e.g., redirect or reset)
      setFormData({ email: '', username: '', password: '' });

    } catch (err) {
      if (err.name === 'AbortError') {
        setError('Request timeout');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSignup}>
      <input name="email" type="email" required onChange={handleChange} />
      <input name="username" type="text" required onChange={handleChange} />
      <input name="password" type="password" required onChange={handleChange} />

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Register'}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default Form;
