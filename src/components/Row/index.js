import React from 'react';
import {Grid}  from "@mui/material";
import styles from './styles.module.css';

const Row = (props) => { 
  const {customStyles} = props

  return (
    <Grid
        className={styles.root}
        style={customStyles}
        container 
        rowSpacing={{
          xs:0,
          md:6
        }}
        columnSpacing={{
          sm: 2,
          md:5,
          lg: 12
        }}
    >
        {props.children}
    </Grid>
  )
}

export default Row