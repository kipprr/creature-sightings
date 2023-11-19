import { Input, TextField } from '@mui/material';

export default function LocationInput(props) {
    const onZipcodeChange = (event) => {
        const zipcode = event.target.value;
        // call google api
        const coords = {lat: '34', lon: '87'};
        props.onChange(coords);
    };
    return (
      <TextField onChange={onZipcodeChange} type="number" name='Zipcode' label="Zipcode" variant="filled" aria-label='Enter a zipcode to find creatures that have been spotted near you' color="success"></TextField>
    );
  }