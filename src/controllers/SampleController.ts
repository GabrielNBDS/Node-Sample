import { Request, Response } from 'express';
// import knex from '../database/connection';

class SampleController {
  async index(request: Request, response: Response): Promise<Response> {
    return response.send('Hello World');
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { filename } = request.file;

    return response.send(`Hello ${filename}`);
  }
}

export default SampleController;
