import { getFunctions, httpsCallable } from 'firebase/functions';
import { useState } from 'react';

// Define the structure of the result returned by the function
interface AdminResult {
  message?: string;
  error?: string;
}

const AddAdminForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const functions = getFunctions();

    try {
      // Call the cloud function to add the custom admin claim
      
      const addAdminClaim = httpsCallable(functions, 'addAdminClaims');
      const trimmedEmail = email.trim();
      console.log("Sending to Firebase:", { email: trimmedEmail });
      const result = await addAdminClaim({ email: trimmedEmail });
      console.log("Received from Firebase Function:", result);  // Log the response from Firebase


      // TypeScript doesn't know the shape of result.data, so we assert it here
      const data = result.data as AdminResult; // Assert the type

      if (data.message) {
        alert(data.message);
      } else if (data.error) {
        setError('Error: ' + data.error);
      }
    } catch (err: any) { // The 'any' type is used for error since it's not always predictable
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
