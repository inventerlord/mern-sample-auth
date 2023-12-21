const firebaseAdmin = require('../modules/firebase-admin');

const register = async (req, res) => {
  const { email, password } = req.body;
  firebaseAdmin
    .auth()
    .createUser({
      email: email,
      password: password,
      emailVerified: false,
      disabled: false,
    })
    .then((cer) => {
      return res.json(cer);
    })
    .catch((e) => {
      return res.json(e);
    });
};

const login = async (req, res) => {};

module.exports = { register, login };
