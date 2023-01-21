import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import './Support.css';

//mui components
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

function Support() {

    const [rate, setRate] = useState(0);
    const dispatch = useDispatch();

    const addSupport = (event) => {
        console.log(rate);
        event.preventDefault();
        dispatch({
            type: 'ADD_SUPPORT',
            payload: rate
        })
    }

    return (
        <>
             <Paper className="container"  sx={{backgroundColor: '#7B6D8D', height: '430px', width: '350px'}}>
                <h3>How well are you being supported?</h3>
                <FormControl >
                    <form>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                sx={{color: '#2C1118', padding: '3px'}} 
                                value="1" 
                                control={<Radio />} 
                                label="1 - Not supported at all" 
                                onChange={(event) => setRate(event.target.value)} 
                            />
                            <FormControlLabel 
                                sx={{color: '#2C1118', padding: '3px'}} 
                                value="2" 
                                control={<Radio />} 
                                label="2 - A little supported" 
                                onChange={(event) => setRate(event.target.value)} 
                            />
                            <FormControlLabel 
                                sx={{color: '#2C1118', padding: '3px'}} 
                                value="3" 
                                control={<Radio />} 
                                label="3 - Somewhat supported" 
                                onChange={(event) => setRate(event.target.value)} 
                                />
                            <FormControlLabel 
                                sx={{color: '#2C1118', padding: '3px'}} 
                                value="4" 
                                control={<Radio />} 
                                label="4 - Well supported"
                                onChange={(event) => setRate(event.target.value)}  
                            />
                            <FormControlLabel 
                                sx={{color: '#2C1118', padding: '3px'}} 
                                value="5" 
                                control={<Radio />} 
                                label="5 - Extremely well suported ♡" 
                                onChange={(event) => setRate(event.target.value)} 
                            />
                        </RadioGroup>
                    </form>
                </FormControl>
                <div>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#A5C4D4', marginTop: '25px'}}
                        onClick={addSupport}
                    >
                        <Link to="/comments">
                            Next
                        </Link>
                    </Button>
                </div>
             </Paper>

        
        </>
    )
}

export default Support;