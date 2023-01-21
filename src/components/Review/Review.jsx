import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import './Review.css'

//mui components
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

function Review() {

    //getting the feedback object from the redux store that lives on index.jx
    const feedback = useSelector(store => store.feedbackAnswers)

    const submitFeedback = () => {

    }

    return (
        <>
            <Paper className="container"  sx={{backgroundColor: '#7B6D8D', height:'280px', width: '600px'}}>
                <h3>Review Submission</h3>
                <Table className="table">
                    <TableHead x={{ minWidth: 650 }} sx={{color: '#2C1118'}} aria-label="simple table">
                        <TableRow sx={{color: '#2C1118'}}>
                            <TableCell sx={{color: '#2C1118'}}>Feelings Rating:</TableCell>
                            <TableCell sx={{color: '#2C1118'}}>Understanding Rating:</TableCell>
                            <TableCell sx={{color: '#2C1118'}}>Support Rating:</TableCell>
                            <TableCell sx={{color: '#2C1118'}}>Comments:</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{color: '#2C1118'}}>{feedback.feeling}</TableCell>
                            <TableCell sx={{color: '#2C1118'}}>{feedback.understanding}</TableCell>
                            <TableCell sx={{color: '#2C1118'}}>{feedback.support}</TableCell>
                            <TableCell sx={{color: '#2C1118'}}>{feedback.comments}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#A5C4D4', marginTop: '25px'}}
                        onSubmit={submitFeedback}
                    >
                        <Link to="/">
                            Submit
                        </Link>
                    </Button>
                </div>
            </Paper>
        </>
    )
}

export default Review;