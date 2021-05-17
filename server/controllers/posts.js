import express from 'express';
import { Mongoose } from 'mongoose';
// import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();

        // console.log(postMessages);

        res.status(200).json(postMessages);

    } catch(error) {
        console.log(error.message);
        res.status(404).json({ message: error.message });

    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, username, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, username, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req,res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if(Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

   const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});
   res.json(updatedPost);
}

// export default router;