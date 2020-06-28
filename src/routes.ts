import express from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import SampleController from './controllers/SampleController';

const routes = express.Router();
const upload = multer(uploadConfig);

const sampleController = new SampleController();

routes.get('/sample', sampleController.index);
routes.post('/sample', upload.single('item'), sampleController.create);

export default routes;
