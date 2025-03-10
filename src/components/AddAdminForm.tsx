import { useState } from 'react';
import { Button } from '@mui/material';

const AdminForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSetAdmin = async (e: any) => {
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
    <div className='w-full pb-3'>
      <form onSubmit={handleSetAdmin}>
        <div>
          <label htmlFor="email" className="block text-black">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-1 p-1 border border-black rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm sm:text-base"
          />
        </div>
      <Button
        type="submit"
        color="success"
        variant="contained"
        disabled={ loading }
        sx={{
          width: "100%",
          marginTop: "10px",
          color: "white",
          "&.Mui-disabled": { color: "white", borderColor: "white" },
        }}
      >
        Create Admin
      </Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminForm;
