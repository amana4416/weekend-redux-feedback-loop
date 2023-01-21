import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState, setState } from 'react';
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
        event.preventDefault();
        dispatch({
            type: 'ADD_SUPPORT',
            payload: rate
        })
    }

    return (
        <>
             <Paper className="container"  sx={{backgroundColor: '#7B6D8D'}}>
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
                                value="1" control={<Radio />} 
                                label="1 - Woah I have a teacher?" 
                                onChange={(event) => setRate(event.target.value)} 
                            />
                            <FormControlLabel 
                                sx={{color: '#2C1118', padding: '3px'}} 
                                value="2" control={<Radio />} 
                                label="2 - I " 
                                onChange={(event) => setRate(event.target.value)} 
                            />
                            <FormControlLabel 
                                sx={{color: '#2C1118', padding: '3px'}} 
                                value="3" control={<Radio />} 
                                label="3 - I can ask my teacher questions" 
                                onChange={(event) => setRate(event.target.value)} 
                                />
                            <FormControlLabel 
                                sx={{color: '#2C1118', padding: '3px'}} 
                                value="4" control={<Radio />} 
                                label="4 - I can "
                                onChange={(event) => setRate(event.target.value)}  
                            />
                            <FormControlLabel 
                                sx={{color: '#2C1118', padding: '3px'}} 
                                value="5" control={<Radio />} 
                                label="5 - I know I  ♡" 
                                onChange={(event) => setRate(event.target.value)} 
                            />
                        </RadioGroup>
                    </form>
                </FormControl>
                <div>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#A5C4D4', marginTop: '25px'}}
                        onSubmit={addSupport}
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