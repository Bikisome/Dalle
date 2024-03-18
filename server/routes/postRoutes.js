import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary'

import Post from '../mongodb/modules/post.js'

dotenv.config();

const router = express.Router();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

// first we get all the post
router.route('/').get(async(req,res)=>{
   try{
   const posts = await Post.find({});
   res.status(200).json({success:true ,data:posts})
   } catch(error){
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
   }
})

// then we post all the post 
router.route('/').post(async(req,res)=>{
    try{
        const {name,prompt,photo} = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);
    
        const newPost = await Post.create({
            name,
            prompt,
            photo:photoUrl.url,
        })
        res.status(200).json({success:true, data:newPost})
    } catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
    }
})
export default router;

// import express from 'express';
// import * as dotenv from 'dotenv';
// import {v2 as cloudinary} from 'cloudinary'

// import Post from '../mongodb/modules/post.js'

// dotenv.config();
// const router = express.Router();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// router.route('/').get(async (req, res) => {
//   try {
//     const posts = await Post.find({});
//     res.status(200).json({ success: true, data: posts });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
//   }
// });

// router.route('/').post(async (req, res) => {
//   try {
//     const { name, prompt, photo } = req.body;
//     const photoUrl = await cloudinary.uploader.upload(photo);

//     const newPost = await Post.create({
//       name,
//       prompt,
//       photo: photoUrl.url,
//     });

//     res.status(201).json({ success: true, data: newPost });
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
//   }
// });

// export default router;
// backend/routes/postRoutes.js

// import express from 'express';
// import * as dotenv from 'dotenv';
// import { v2 as cloudinary } from 'cloudinary';
// import Post from '../mongodb/modules/post.js';

// dotenv.config();
// const router = express.Router();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// router.get('/', async (req, res) => {
//   try {
//     const posts = await Post.find({});
//     res.status(200).json({ success: true, data: posts });
//   } catch (err) {
//     console.error(err); // Log the error for debugging purposes
//     res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const { name, prompt, photo } = req.body;
//     const photoUrl = await cloudinary.uploader.upload(photo);

//     const newPost = await Post.create({
//       name,
//       prompt,
//       photo: photoUrl.url,
//     });

//     res.status(201).json({ success: true, data: newPost });
//   } catch (err) {
//     console.error(err); // Log the error for debugging purposes
//     res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
//   }
// });

// export default router;
