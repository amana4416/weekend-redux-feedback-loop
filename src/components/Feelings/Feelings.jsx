import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState, setState } from 'react';
import './Feelings.css';

//mui components
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

function Feelings() {

    const [rate, setRate] = useState(0);
    const dispatch = useDispatch();

    const addFeelings = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEELINGS',
            payload: rate
        })
    }

    return (
        <>
             <Paper className="container"  sx={{backgroundColor: '#7B6D8D'}}>
                <h3>How are you feeling today?</h3>
                <FormControl >
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                        <FormControlLabel
                            sx={{color: '#2C1118', padding: '3px'}} 
                            value="1" control={<Radio />} 
                            label="1 - Atrocious" 
                            onChange={(event) => setRate(event.target.value)} 
                        />
                        <FormControlLabel 
                            sx={{color: '#2C1118', padding: '3px'}} 
                            value="2" control={<Radio />} 
                            label="2 - Not too great" 
                            onChange={(event) => setRate(event.target.value)} 
                        />
                        <FormControlLabel 
                            sx={{color: '#2C1118', padding: '3px'}} 
                            value="3" control={<Radio />} 
                            label="3 - Not bad, but could be better" 
                            onChange={(event) => setRate(event.target.value)} 
                            />
                        <FormControlLabel 
                            sx={{color: '#2C1118', padding: '3px'}} 
                            value="4" control={<Radio />} 
                            label="4 - Good"
                            onChange={(event) => setRate(event.target.value)}  
                        />
                        <FormControlLabel 
                            sx={{color: '#2C1118', padding: '3px'}} 
                            value="5" control={<Radio />} 
                            label="5 - Best day ever!! ♡" 
                            onChange={(event) => setRate(event.target.value)} 
                        />
                    </RadioGroup>
                </FormControl>
                <div>
                    <Button
                        sx={{backgroundColor: '#593F62', color: '#A5C4D4', marginTop: '25px'}}
                        onSubmit={addFeelings}
                        >
                        Next
                    </Button>
                </div>
             </Paper>

        
        </>
    )
}

export default Feelings;