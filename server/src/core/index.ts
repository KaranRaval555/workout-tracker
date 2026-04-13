import bcrypt from "bcrypt";
import { pool } from "../shell/db.ts";

export const hashPassowrd = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const addUser = async (username: string, password: string) => {
  try {
    const hashedPassword = await hashPassowrd(password);
    const result = await pool.query(
      `INSERT INTO users(username, password) values($1, $2) RETURNING *`,
      [username, hashedPassword],
    );
    return result.rows[0];
  } catch (e) {
    console.log(e);
    console.log(e.message);
  }
};

export const getUser = async (username: string) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE username=$1`, [
      username,
    ]);
    return result.rows[0];
  } catch (e) {
    console.log(e);
    console.log(e.message);
  }
};
