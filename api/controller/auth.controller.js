import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    // 신규 사용자 생성
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(200).json({ message: "user created success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to create user" });
  }
};
export const login = (req, res) => {
  // db connection
  console.log("login endpoint");
};
export const logout = (req, res) => {
  // db connection
  console.log("logout endpoint");
};
