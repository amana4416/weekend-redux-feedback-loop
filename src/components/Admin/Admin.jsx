import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert'
import './Admin.css'

//mui components
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FlagIcon from '@mui/icons-material/Flag';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

function Admin() {

    //this piece of state is going to store the database table when it is fetched
    const [previousFeedback, setPreviousFeedback] = useState([]);

    useEffect(() => {
        getFeedback();
    }, []) //empty brackets are the stop sign so get route is only used once when the page initially loads

    //get request
    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
        .then((response) => {
            setPreviousFeedback(response.data);
        })
        .catch((error) => {
            console.log('something broke in getFeedback get request', error);
        })
    }

    const deleteFeedback = (id) => {
        //sweet alert before deleting!! User must confirm for delete to actually work
        swal({
            title: "Are you sure you want to delete?",
            text: "Feedback is gone forever once deleted",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        //if confirmed delete, then continue on with axios delte request
        .then((removeFeedback) => {
            if (removeFeedback) {
                axios({
                    method: 'DELETE',
                    url: `/feedback/${id}`
                })
                .then((response) => {
                    swal("You deleted feedback", {
                        icon: "success"})
                     //call get function so page can be updated after deleting feedback from database
                    getFeedback();
                })
               .catch((error) => {
                console.log('something broke in deleteFeedback delete request', err);
               })
            } else {
                swal("Phew! Nice save!");
            }
        })
    }
    
    return (
        <>
            <Paper className="container" sx={{backgroundColor: '#7B6D8D', height: 'auto', width: '650px'}}>
                <h3>Most recent feedback:</h3>
                <Table>
                    <TableHead x={{ minWidth: 650 }} sx={{color: '#2C1118'}} aria-label="simple table">
                        <TableRow sx={{color: '#2C1118'}}>
                            <TableCell sx={{color: '#2C1118'}}>Feelings Rating</TableCell>
                            <TableCell sx={{color: '#2C1118'}}>Understanding Rating</TableCell>
                            <TableCell sx={{color: '#2C1118'}}>Support Rating</TableCell>
                            <TableCell sx={{color: '#2C1118'}}>Comments</TableCell>
                            <TableCell sx={{color: '#2C1118'}}>Flag for Review</TableCell>
                            <TableCell sx={{color: '#2C1118'}}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {previousFeedback.map((feedback) => {
                            return (
                                <TableRow key={feedback.id}>
                                    <TableCell sx={{color: '#2C1118'}}>{feedback.feeling}</TableCell>
                                    <TableCell sx={{color: '#2C1118'}}>{feedback.understanding}</TableCell>
                                    <TableCell sx={{color: '#2C1118'}}>{feedback.support}</TableCell>
                                    <TableCell sx={{color: '#2C1118'}}>{feedback.comments}</TableCell>
                                    <TableCell>
                                        <FlagIcon 
                                        sx={{color: '#A5C4D4'}}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <DeleteForeverIcon 
                                            sx={{color: '#A5C4D4'}}
                                            onClick={() => {deleteFeedback(feedback.id)}}
                                        />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <div>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#A5C4D4', margin: '25px'}}
                    >
                        <Link to="/">
                            Leave new feedback
                        </Link>
                    </Button>
                </div>
            </Paper>
        </>
    )
}

export default Admin;