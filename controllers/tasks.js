const Task = require('../models/Tasks');

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(200).json({success: true, data: task});
  } catch(err) {
    res.status(500).json({success: false, msg: err.message})
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({success: true, data: tasks})
  } catch(err) {
    res.status(500).json({success: false, msg: err.message})
  }
};

const getTask = async(req, res) => {
  const {id} = req.params
  try {
    const task = await Task.findOne({_id: id});
    if(!task) {
      return res.json({success: false, msg: `No task with id ${id}`})
    }
    res.status(200).json({success: true, data: task})
  } catch(err) {
    res.status(500).json({success: false, msg: err.message})
  }
};

const updateTask = async (req, res) => {
  const {id} = req.params
  try {
    const task = await Task.findOneAndUpdate({_id: id}, req.body, {
      new: true,
      runValidators: true
    });
    if(!task) {
      return res.json({success: false, msg: `No task with id ${id}`})
    }
    res.status(200).json({success: true, data: task})
  } catch(err) {
    res.status(500).json({success: false, msg: err.message})
  }
};

const deleteTask = async (req, res) => {
  const {id} = req.params
  try {
    const task = await Task.findOneAndRemove({_id: id});
    if(!task) {
      return res.json({success: false, msg: `No task with id ${id}`})
    }
    res.status(200).json({success: true})
  } catch(err) {
    res.status(500).json({success: false, msg: err.message})
  }
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
