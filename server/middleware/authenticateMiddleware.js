const jwt = require('jsonwebtoken');

exports.verifyAdmin = (req, res, next) => {
  const {token} = req.body;

  if (!token) {
    return res.status(403).json({ message: 'Authentication failed: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    

    if (decoded.role === 'admin') {
      req.user = decoded;
      next();
    } else {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }
  } catch (error) {
    ;
    return res.status(403).json({ message: 'Authentication failed' });
  }
};

exports.verifyToken = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    try {
      if (!authHeader) res.status(401).json({ message: "Authorization header missing" });
      const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "Token missing" });
        }
        next();
      
    } catch (error) {

       res.status(403).send({message:'AUth Failed'});
      
    }
    
}
