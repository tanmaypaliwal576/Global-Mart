import jwt from "jsonwebtoken";

export const generatetoken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      isAdmin: user.isAdmin || false,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};
