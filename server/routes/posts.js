import express from 'express';
const router = express.Router();
import { getPosts } from '../controllers/posts.js'

router.get('/',  getPosts );

export default router;

// http://localhost:5000/posts