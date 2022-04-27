import React from 'react';
import {Grid}  from "@mui/material";
import styles from './styles.module.css';
import SectionTitle from '../sectionTitle';

const Row = (props) => { 
  const {customStyles} = props

  return (
    <Grid
        className={styles.root}
        style={customStyles}
        container 
        spacing={{
          xs:5,
          md:10
        }}
    >
        {props.children}
    </Grid>
  )
}

export default Row