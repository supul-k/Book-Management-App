const jwt = require('jsonwebtoken');

class JwtAuth {
  jwtAuth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: 'Token not found' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  }
}

module.exports = new JwtAuth();