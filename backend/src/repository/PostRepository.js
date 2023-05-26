const db = require("../db");

class PostRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT posts.conteudo, usuarios.usuario AS usuario
      FROM posts
      LEFT JOIN usuarios ON usuarios.id = posts.user_id
    `);
    return rows;
  }
}

module.exports = new PostRepository();
