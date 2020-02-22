import express from "express";
import bugService from "../services/BugService";

export default class BugController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      // .get("/:id", this.getById)
      // .get("/:id/note", this.getNoteByBugId)
      // .put("", this.edit)
      // .post("/:id", this.create)
      // .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await bugService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  // async getById(req, res, next) {
  //   try {
  //     let data = await bugService.getById(req.params.id)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
  // async edit(req, res, next) {
  //   try{
  //   let data = await bugService.edit(req.params.id)
  //   res.send(data)
  //   } catch(error) {
  //     next(error)
  //   }
  // }
  // async create(req, res, next) {
  //   try {
  //     let data = await bugService.create(req.body)
  //     res.status(201).send(data)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
  // async delete(req, res, next) {
  //   try {
  //     let data = await bugService.delete(req.params.id)
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}
