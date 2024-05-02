const express=require("express");
const User = require("../schemas/User");
const jwt=require("jsonwebtoken");
const router = express.Router();
const secretKey ="nFmJ29qxqgMssJ7gxhriwE+1r8Awp8egXnpRkC3CjIM=";
router.get('/codechef', verifyToken,async(req, res) => {
     const {email}=req.user;
    const user = await User.findOne({ email });
    const codechefId=user.codechefId;
    const response = await fetch(`https://codechef-api.vercel.app/${codechefId}`);
      const movies = await response.json();
      res.json(movies);
     
});

router.get('/leetcode',verifyToken, async(req, res) => {
 
    const {email}=req.user;
    const user = await User.findOne({ email });
    const leetcodeId=user.leetcodeId;
    const response = await fetch(`https://leetcodestats.cyclic.app/${leetcodeId}`);
      const movies = await response.json();
      res.json(movies);
      console.log(leetcodeId);
});
function verifyToken(req, res, next) {
 
    const token = req.headers['authorization'];
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: 'unauthorized' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
     
     
      if (err) {
        console.log(err);
        return res.status(401).json({ message: 'Invalid token' });
      }
      
      req.user = decoded; 
      console.log(decoded);
      next();
    });
  }

module.exports = router;