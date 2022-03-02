import connection from "../db.js";

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    let checkUser = await connection.query(
      `SELECT * FROM usuarios WHERE email=$1 `,
      [email]
    );
    //ai eu tenho que conferir a senha para ver se bate com a informada
    if (checkUser.rows.length === 0) {
      //isso quer dizer que não tem usuário com esse email
      return res.status(401).send("Email ou senha incorretos");
    }
    const checkPassword = checkUser.rows[0].senha;

    if (checkPassword !== password) {
      return res.status(401).send("Email ou senha incorretos");
    }

    const userId = checkUser.rows[0].id;
    console.log(userId);
    //ai gera o token, e adiciona a pessoa na sessão. Por enquanto, vou usar um token temporário
    const token = "12345";

    await connection.query(
      `
    INSERT INTO sessoes ("idUsuario",token) VALUES ($1,$2)
    `,
      [userId, token]
    );
    res.status(201).send("Login realizado com sucesso");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
