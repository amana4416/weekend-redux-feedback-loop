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
import Button from '@mui/material/Button';

function Admin() {


    
    return (
        <>
            <Paper className="container" sx={{backgroundColor: '#7B6D8D',  width: '650px'}}>
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
                    
                </Table>
                <div>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#A5C4D4', marginTop: '25px'}}
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