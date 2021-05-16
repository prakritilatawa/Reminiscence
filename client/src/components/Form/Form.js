import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import FileBase from 'react-file-base64';


import useStyles from './styles';

import {createPost} from '../../actions/posts';


const Form = () => {
      
    const [postData, setPostData] = useState({ username: '', title: '', message: '', tags: '', selectedFiles: '' });

    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch(createPost(postData));

    }
    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
             <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
             <Typography variant="h6">Creating a memory</Typography>
             <TextField name="username" variant="outlined" label="username" fullWidth value={postData.username} onChange={(e) => setPostData({ ...postData, username: e.target.value })} />
             <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
             <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
             <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
             <div className={classes.fileInput}>
                <FileBase>
                   type="file"
                   multiple={false}
                   onDone={({base64}) => setPostData({ ...postData, selectedFiles: base64})}
                </FileBase>
             </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>

        </Paper>
    );
}

export default Form;