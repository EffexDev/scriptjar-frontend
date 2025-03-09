const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.createAdminUser = functions.https.onCall(async (data, context) => {
  const { email, password } = data;

  // Ensure the user is authorized to call this function (optional, for security)
  if (context.auth && context.auth.token.admin === true) {
    try {
      // Create the user in Firebase Authentication
      const userRecord = await admin.auth().createUser({
        email,
        password,
      });

      // Set the custom claim to make the user an admin
      await admin.auth().setCustomUserClaims(userRecord.uid, { admin: true });

      // Return success
      return { message: 'Admin user created successfully!' };
    } catch (error) {
      // Handle errors (e.g., user already exists)
      return { error: error.message };
    }
  } else {
    // If the user is not authorized to call this function
    throw new functions.https.HttpsError('permission-denied', 'Only admins can create new admins.');
  }
});
