const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addAdminClaims = functions.https.onCall(async (data, context) => {
  const { email } = data;  // Get email from request body
  if (!email) {
    throw new functions.https.HttpsError('invalid-argument', 'Email is required.');
  }

  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(userRecord.uid, { admin: true });
    return { message: `Admin claim added to ${email}` };
  } catch (error) {
    throw new functions.https.HttpsError('internal', error.message);
  }
});
