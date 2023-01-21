import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState, setState } from 'react';
import './Understanding.css';

//mui components
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

function Understanding() {

    const [rate, setRate] = useState(0);
    const dispatch = useDispatch();

    const addUnderstanding = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: rate
        })
    }

    return (
        <>
             <Paper className="container"   sx={{backgroundColor: '#7B6D8D', height: '430px', width: '350px'}}>
                <h3>How well are you understanding the content?</h3>
                <FormControl >
                    <form>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                sx={{color: '#2C1118', padding: '1px'}} 
                                value="1" control={<Radio />} 
                                label="1 - Understood nothing" 
                                onChange={(event) => setRate(event.target.value)} 
                            />
                            <FormControlLabel 
                                sx={{color: '#2C1118', padding: '1px'}} 
                                value="2" control={<Radio />} 
                                label="2 - Understood a little" 
                                onChange={(event) => setRate(event.target.value)} 
                            />
                            <FormControlLabel 
                                sx={{color: '#2C1118', padding: '1px'}} 
                                value="3" control={<Radio />} 
                                label="3 - Understood some things" 
                                onChange={(event) => setRate(event.target.value)} 
                                />
                            <FormControlLabel 
                                sx={{color: '#2C1118', padding: '1px'}} 
                                value="4" control={<Radio />} 
                                label="4 - Understood most things"
                                onChange={(event) => setRate(event.target.value)}  
                            />
                            <FormControlLabel 
                                sx={{color: '#2C1118', padding: '1px'}} 
                                value="5" control={<Radio />} 
                                label="5 - Understood everything ♡" 
                                onChange={(event) => setRate(event.target.value)} 
                            />
                        </RadioGroup>
                    </form>
                </FormControl>
                <div>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#A5C4D4', marginTop: '25px'}}
                        onSubmit={addUnderstanding}
                    >
                        <Link to="/support">
                            Next
                        </Link>
                    </Button>
                </div>
             </Paper>

        
        </>
    )
}

export default Understanding;