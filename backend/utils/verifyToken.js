import jwt from "jsonwebtoken";
import User from "../models/User.js";
//import catchAsyncErrors from "./catchAsyncErrors.js";


export const verifyAdmin = async (req,res,next)=>{
    try {
    const cookie = req.headers.cookie;
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set("Access-Control-Allow-Credentials", "true");
    //res.setHeader("Access-Control-Allow-Credentials", true);
    //console.log(cookie);
    if (!cookie) {
      return res.status(401).json({
        success: false,
        message: "Please login first",
      });
    }
    const token = cookie
      .split(";")
      .find((c) => c.trim().startsWith("slotbooking="));

    if (!token) {
      return res.status(401).json({
        success: false,
        error: "Who are you? You Degenerate at token 1",
      });
    }

    const tokenWithoutPrefix = token.split("=")[1];
    if (!tokenWithoutPrefix) {
      return res.status(401).json({
        success: false,
        error: "Who are you? You Degenerate at token 2",
      });
    }

    //console.log(tokenWithoutPrefix);
    const decoded = await jwt.verify(
      tokenWithoutPrefix,
      process.env.JWT_SECRET
    );

    // check if the user role is 'research'
    if (decoded.role==="Admin") {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to access this resource",
      });
    }


    req.user = await User.findById(decoded._id);
    //console.log(req.user);
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const isAuthenticated = async (req, res, next) => {
  try {
    const cookie = req.headers.cookie;
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set("Access-Control-Allow-Credentials", "true");
    //res.setHeader("Access-Control-Allow-Credentials", true);
    //console.log(cookie);
    if (!cookie) {
      return res.status(401).json({
        success: false,
        message: "Please login first",
      });
    }
    const token = cookie
      .split(";")
      .find((c) => c.trim().startsWith("slotbooking="));

    if (!token) {
      return res.status(401).json({
        success: false,
        error: "Who are you? You Degenerate at token 1",
      });
    }

    const tokenWithoutPrefix = token.split("=")[1];
    if (!tokenWithoutPrefix) {
      return res.status(401).json({
        success: false,
        error: "Who are you? You Degenerate at token 2",
      });
    }

    //console.log(tokenWithoutPrefix);
    const decoded = await jwt.verify(
      tokenWithoutPrefix,
      process.env.JWT_SECRET
    );

    //console.log(decoded._id);
    //console.log(decoded.id);

    req.user = await User.findById(decoded._id);
    //console.log(req.user);
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

  