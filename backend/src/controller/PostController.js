const PostRepository = require("../repository/PostRepository");

class PostController {
  async index(request, response) {
    const posts = await PostRepository.findAll();

    response.setHeader("Access-Control-Allow-Origin", "*");

    response.json(posts);
  }
}

module.exports = new PostController();
