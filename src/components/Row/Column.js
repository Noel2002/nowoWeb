import { Grid } from '@mui/material';
import React from 'react'

const Column = (props) => {
  return (
    <Grid item xs={12} sm={6} style={props.customStyles}>
        {props.children}
    </Grid>
  )
}

export default Column