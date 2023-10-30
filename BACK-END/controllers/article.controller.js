import Model from "../models/Article.js";

export const getArticle = async (req, res, next) => {
  try {
    const articles = await Model.find();
    res.status(200).json(articles);
  } catch (error) {
    next(error);
  }
};

export const postArticle = async (req, res, next) => {
  try {
    await Model.create(req.body);
    res.status(201).json("Article has been created!");
  } catch (error) {
    next(error);
  }
};

export const getArticleById = async (req, res, next) => {
  try {
    const article = await Model.findById(req.params.id);
    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
};

export const deleteArticle = async (req, res, next) => {
  try {
    const article = await Model.findById(req.params.id);
    if (!article) return res.status(404).json("article not found.");

    await Model.findByIdAndRemove(req.params.id);
    res.status(200).json("The article has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const putArticle = async (req, res, next) => {
  try {
    const article = await Model.findById(req.params.id);
    if (!article) return res.status(404).json("article not found !");

    const updateArticle = await Model.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      message: "Article updated",
      updateArticle,
    });
  } catch (error) {
    next(error);
  }
};
