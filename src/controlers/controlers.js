const authorModel = require("../model/authorModel");
const blogModel = require("../model/blogModel");
const moment = require("moment");
const jwt = require ('jsonwebtoken')

async function createAuthorData(req, res) {
  try {
    const Data = req.body;
    if (!Data) {
      return res.status(400).send({ status: false, msg: "Bad request" });
    }
    const saveData = await authorModel.create(Data);
    return res.status(201).send({ status: true, data: saveData });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
}

async function createBlogData(req, res) {
  try {
    const Data = req.body;
    if (!Data) {
      return res.status(400).send({ status: false, msg: "Bad request" });
    }
    const saveData = await blogModel.create(Data);
    return res.status(201).send({ status: true, data: saveData });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
}

async function getBlogs(req, res) {
  try {
    const Data = req.query;
    Data.isDeleted = false;
    Data.isPublished = true;
    const saveData = await blogModel.find(Data);
    if (saveData.length === 0) {
      return res.status(404).send({ status: false, msg: "page not founded" });
    }
    return res.status(200).send({ status: true, data: saveData });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
}

async function updateBlogs(req, res) {
  try {
    const Id = req.params.blogId;
    const Data = req.body;
    if (!Data) {
      return res.status(400).send({ status: false, msg: "Bad request" });
    }
    const getData = await blogModel.findOneAndUpdate(
      { _id: Id, isDeleted: false },
      { $push: { tags: Data.tags, subcategory: Data.subcategory } }
    );
    if (!getData) {
      return res.status(404).send({ status: false, msg: "page not founded" });
    }
    if (getData.isPublished === false) {
      // console.log(Data);
      delete Data["tags"];
      delete Data["subcategory"];
      // console.log(Data)//;
      Data.isPublished = true;
      Data.publishedAt = moment().format();

      const updatedData = await blogModel.findByIdAndUpdate(
        { _id: Id },
        { $set: Data },
        { new: true }
      );
      return res.status(200).send({ status: true, data: updatedData });
    } else {
      // console.log(Data);
      delete Data["tags"];
      delete Data["subcategory"];
      // console.log(Data);
      const updatedData = await blogModel.findByIdAndUpdate(
        { _id: Id },
        { $set: Data },
        { new: true }
      );
      return res.status(200).send({ status: true, data: updatedData });
    }
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
}
let deleteBlogById = async function (req, res) {
  try {
    let Id = req.params.blogId;
    const deletedData = await blogModel.findByIdAndUpdate(
      { _id: Id, isDeleted: false },
      {
        $set: {
          isDeleted: true,
          deletedAt: moment().format(),
        },
      },
      { new: true }
    );
    if (!deletedData) {
      return res.status(404).send({ status: false, msg: "page not founded" });
    }
    return res.status(200).send();
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

let deleteBlog = async function (req, res) {
  try {
    const Data = req.query;
    if (Object.keys(Data).length < 1) {
      return res.status(400).send({ status: false, msg: "bad request" });
    }
    Data.isDeleted = false;
    const deleteBlog = await blogModel.updateMany(
      Data,
      {
        $set: {
          isDeleted: true,
          deletedAt: moment().format(),
        },
      },
      { new: true }
    );
    if (deleteBlog.modifiedCount === 0) {
      return res.status(404).send({ status: false, msg: "page not founded" });
    }
    return res.status(200).send({ status: true, data: deleteBlog });
  } catch (err) {
    return res.status(500).send({ msg: "error", error: err.message });
  }
};

async function login(req,res){
  try{
  
    const data = req.body
    const logined = await authorModel.findOne(data)
    if(!logined){
      return res.status(401).send({status : false, msg : "email or password is wrong"})
    }
    const token = await jwt.sign(
      {
        authorId : logined._id.toString(),
        batch : "Plutonium"
      },
      "project-pltm"
    )
    return res.status(201).send({status : true, token})
  }catch(err){
    return res.status(500).send({status : false, msg : err.message})
  }
}

module.exports.createAuthorData = createAuthorData;
module.exports.createBlogData = createBlogData;
module.exports.getBlogs = getBlogs;
module.exports.updateBlogs = updateBlogs;
module.exports.deleteBlogById = deleteBlogById;
module.exports.deleteBlog = deleteBlog;
module.exports.login = login
