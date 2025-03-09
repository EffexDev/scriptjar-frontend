import { getFunctions, httpsCallable } from 'firebase/functions';
import { useState } from 'react';

const AddAdminForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const functions = getFunctions();

    try {
      // Call the cloud function to add the custom admin claim
      const addAdminClaim = httpsCallable(functions, 'addAdminClaim');
      const result = await addAdminClaim({ email });

      if (result.data && result.data.message) {
        alert(result.data.message);
      } else if (result.data && result.data.error) {
        setError('Error: ' + result.data.error);
      }
    } catch (err) {
      setError('Error adding admin: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add Admin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding Admin...' : 'Add Admin'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default AddAdminForm;
