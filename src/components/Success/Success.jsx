import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import dora from './dora.gif';
import './Success.css';

//mui components
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { deepOrange } from '@mui/material/colors';

function Success () {
    return(
        <> 
            <Paper className="container" sx={{backgroundColor: '#7B6D8D', height: '385px', width: '350px'}}>
                <h3>Thank you!</h3>
                <img src={dora}  />
            
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

export default Success;