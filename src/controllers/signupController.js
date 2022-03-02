import connection from "../db.js";

export async function signUp(req, res) {
  try {
    const { name, email, password } = req.body;

    await connection.query(
      `INSERT INTO usuarios (nome,email,senha) VALUES ($1,$2,$3)`,
      [name, email, password]
    );
    res.status(201).send("Cadastro realizado com sucesso");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
