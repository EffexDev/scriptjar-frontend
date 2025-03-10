import { useState } from 'react';
import { Button } from '@mui/material';

const RemoveAdminForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRemoveAdmin = async (e: any) => {
    e.preventDefault();

    if (!email) {
      setMessage('Email is required.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://scriptjar-backend-production.up.railway.app/remove-admin', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Successfully removed admin privileges.');
      } else {
        setMessage(data.error || 'Failed to remove admin privileges.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while removing admin privileges.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full'>
      <form onSubmit={handleRemoveAdmin}>
        <div>
          <label htmlFor="email">User Email:</label>
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
            color="error"
            variant="contained"
            disabled={ loading }
            sx={{
            width: "100%",
            marginTop: "10px",
            color: "white",
            "&.Mui-disabled": { color: "white", borderColor: "white" },
            }}
        >
            Remove Admin
        </Button>
      </form>
    </div>
  );
};

export default RemoveAdminForm;
