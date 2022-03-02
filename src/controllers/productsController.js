import connection from "../db.js";

export async function postProduct(req, res) {
  const { name, price } = req.body;
  const token = req.headers.user;
  console.log(typeof token);
  try {
    //conferir se o usuário está com uma sessão ativa
    const checkUserSession = await connection.query(
      `SELECT * FROM sessoes WHERE token=$1`,
      [token]
    );
    console.log(checkUserSession.rows);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
