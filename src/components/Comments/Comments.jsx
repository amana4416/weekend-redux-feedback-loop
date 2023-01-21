import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import './Comments.css';

//mui components
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Comments() {

    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    const addComments = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment
        })
    }

    return (
        <>
            <Paper className="container"  sx={{backgroundColor: '#7B6D8D'}}>
                <h3>Would you like to leave a comment?</h3>
                <TextField 
                    className="comments" 
                    id="outlined-basic" 
                    label="Comments (optional)" 
                    variant="outlined"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                />
                <div>
                <Button
                        variant="contained"
                        sx={{ backgroundColor: '#A5C4D4', marginTop: '25px', marginRight: '12px'}}
                    >
                        <Link to="/support">
                            Back
                        </Link>
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#A5C4D4', marginTop: '25px', marginLeft: '12px'}}
                        onClick={addComments}
                    >
                        <Link to="/review">
                            Next
                        </Link>
                    </Button>
                </div>
            </Paper>
        </>
    )
}

export default Comments;