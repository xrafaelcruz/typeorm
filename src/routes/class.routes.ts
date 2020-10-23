import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import ClassRepository from '../repositories/ClassRepository';
import Class from '../models/Class';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Class);
    const res = await repo.save(request.body);

    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message', err.message);
  }
});

classRouter.get('/', async (request, response) => {
  return response.json(await getRepository(Class).find());
});

classRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ClassRepository);

  const res = await repository.findByName(request.params.name);

  response.json(res);
});

export default classRouter;
