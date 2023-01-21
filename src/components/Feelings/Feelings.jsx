import React from 'react';
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
    return (
        <>
             <Paper className="container"  sx={{backgroundColor: '#7B6D8D'}}>
                <h3>How are you feeling today?</h3>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label" ></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                        <FormControlLabel sx={{color: '#2C1118', padding: '3px'}} value="1" control={<Radio />} label="1 - Atrocious" />
                        <FormControlLabel sx={{color: '#2C1118', padding: '3px'}} value="2" control={<Radio />} label="2 - Not too great" />
                        <FormControlLabel sx={{color: '#2C1118', padding: '3px'}} value="3" control={<Radio />} label="3 - Not bad, but could be better" />
                        <FormControlLabel sx={{color: '#2C1118', padding: '3px'}} value="4" control={<Radio />} label="4 - Good" />
                        <FormControlLabel sx={{color: '#2C1118', padding: '3px'}} value="5" control={<Radio />} label="5 - Best day ever!! ♡" />
                    </RadioGroup>
                </FormControl>
                <div>
                    <Button sx={{backgroundColor: '#593F62', marginTop: '25px'}}>
                        Next
                    </Button>
                </div>
             </Paper>

        
        </>
    )
}

export default Feelings;