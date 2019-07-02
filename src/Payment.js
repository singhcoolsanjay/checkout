import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  paymentroot: {
    display: 'flex',
  },
  paymentformControl: {
    margin: theme.spacing(3),
  },
  paymentgroup: {
    margin: theme.spacing(1, 0),
  },
}));

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Cash on Delivery');

  function paymenthandleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.paymentroot}>
      <FormControl component="fieldset" className={classes.paymentformControl}>
        <FormLabel component="legend">Select Mode of Payment</FormLabel>
        <RadioGroup
          aria-label="Payment"
          name="payment"
          className={classes.paymentgroup}
          value={value}
          onChange={paymenthandleChange}
        >
          <FormControlLabel value="Cash on Delivery" control={<Radio />} label="Cash on Delivery" />
          <FormControlLabel value="Wallet" control={<Radio />} label="Wallet" />
          <FormControlLabel value="Net Banking" control={<Radio />} label="Net Banking" />
          <FormControlLabel value="Debit/Credit Card" control={<Radio />} label="Debit/Credit Card" />
          </RadioGroup>
      </FormControl>

    </div>
  );
}
