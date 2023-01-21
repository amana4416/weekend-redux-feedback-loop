import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import dora from './dora.gif';
import './Success.css';

//mui components
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Success () {

     //getting the feedback object from the redux store that lives on index.jx
     //we need to call the array here because we're going to empty the object each time we start the feedback loop over
     const feedback = useSelector(store => store.feedbackAnswers)
     const dispatch = useDispatch();

     //yelling to the object in the redux bucket we're going to empty
     const resetFeedback = () => {
        dispatch ({
            type: 'RESET_FEEDBACK',
            //we're not adding anything, so there's no payload to be sent!
        })
     }

    return(
        <> 
            <Paper className="container" sx={{backgroundColor: '#7B6D8D', height: '385px', width: '350px'}}>
                <h3>Thank you!</h3>
                <img src={dora}  />
            
            <div>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: '#A5C4D4', marginTop: '25px'}}
                    onClick={resetFeedback}
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