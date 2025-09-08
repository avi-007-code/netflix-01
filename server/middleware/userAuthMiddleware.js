const jwt = require('jsonwebtoken');

exports.verifyUser = (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    return res.status(403).json({ message: 'Authentication failed: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    console.log('Request triggered from:', req.path);
    console.log('Token payload:', decoded);

    if (decoded.role === 'user') {
      req.user = decoded;
      next();
    } else {
      return res.status(403).json({ message: 'Access denied: Users only' });
    }
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(403).json({ message: 'Authentication failed' });
  }
};

//module.exports = verifyUser;
