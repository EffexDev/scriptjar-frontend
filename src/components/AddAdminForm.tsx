import { useState } from 'react';

const SetAdminForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email) {
      setMessage('Email is required.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://scriptjar-backend-production.up.railway.app/set-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Successfully set admin privileges.');
      } else {
        setMessage(data.error || 'Failed to set admin privileges.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while setting admin privileges.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Set Admin Privileges</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">User Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Setting Admin...' : 'Set Admin'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SetAdminForm;
