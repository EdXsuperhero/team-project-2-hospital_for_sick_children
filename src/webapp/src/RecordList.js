import React from 'react';
import { Grid, SvgIcon } from '@material-ui/core';
import { Button, ButtonGroup, } from '@material-ui/core';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Opacity, Warning } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    maxHeight: window.innerHeight - theme.spacing(16),
  },
  head: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  sort: {
    padding: theme.spacing(1),
  },
  grid: {
    alignItems: 'center',
  },
}));

function createData(time, imageURL, leak, poop, urgent) {
  return { time, imageURL, leak, poop, urgent };
}

const rows = [
  createData('2021-01-32 13:51:17', '', true, false, true),
  createData('2022-02-31 25:60:37', '', false, true, false),
  createData('2009-01-01 23:24:54', '', true, false, false),
  createData('2021-01-32 13:51:17', '', true, false, true),
  createData('2022-02-31 25:60:37', '', false, true, false),
  createData('2009-01-01 23:24:54', '', true, false, false),
  createData('2021-01-32 13:51:17', '', true, false, true),
  createData('2022-02-31 25:60:37', '', false, false, false),
  createData('2009-01-01 23:24:54', '', true, false, false),
  createData('2021-01-32 13:51:17', '', true, false, true),
  createData('2022-02-31 25:60:37', '', false, false, false),
  createData('2009-01-01 23:24:54', '', true, false, false),
  createData('2021-01-32 13:51:17', '', true, false, true),
  createData('2022-02-31 25:60:37', '', false, false, false),
  createData('2009-01-01 23:24:54', '', true, false, false),
  createData('2021-01-32 13:51:17', '', true, false, true),
  createData('2022-02-31 25:60:37', '', false, false, false),
  createData('2009-01-01 23:24:54', '', true, false, false),
  createData('2021-01-32 13:51:17', '', true, false, true),
  createData('2022-02-31 25:60:37', '', false, false, false),
  createData('2009-01-01 23:24:54', '', true, false, false),
];

function RecordList() {

  const classes = useStyles();

  return (
    <TableContainer className={ classes.container } >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className={ classes.head } colSpan={4} >
              <Typography variant='overline' display='block'> Sort By </Typography>
              <ButtonGroup variant='text'>
                <Button color='primary'> Time </Button>
                <Button color='secondary'> Leak? </Button>
                <Button color='secondary'> Poo? </Button>
                <Button color='secondary'> Urgent? </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map(row => (
              <TableRow hover>
                <TableCell align='left'> { row.time } </TableCell>
                <TableCell align='left'> <img src='/logo192.png' alt='' /> </TableCell>
                <TableCell align='left'>
                  <Grid container className={ classes.grid } >
                    <Grid item xl={ 4 } xs={ 4 } >
                      <Opacity fontSize='large' color={ row.leak ? 'error' : 'disabled' } />
                    </Grid>
                    <Grid item xl={ 4 } xs={ 4 } >
                      <SvgIcon fontSize='large' color={ row.poop ? 'error' : 'disabled' } >
                        <path d='M11.36 2c-.21 0-.49.12-.79.32C10 2.7 8.85 3.9 8.4 5.1c-.34.9-.35
                                1.72-.21 2.33c-.56.1-.97.28-1.13.35c-.51.22-1.59 1.18-1.69 2.67c-.03.52.04
                                1.05.2 1.55c-.66.19-1.04.43-1.07.44c-.32.12-.85.49-1 .69c-.35.4-.58.87-.71
                                1.37c-.29 1.09-.19 2.33.34 3.33c.29.56.69 1.17 1.13 1.6c1.44 1.48 3.92 2.04
                                5.88 2.36c2.39.4 4.89.26 7.12-.66c3.35-1.39 4.24-3.63
                                4.38-4.24c.29-1.39-.07-2.7-.22-3.02c-.22-.46-.58-.93-1.17-1.23c-.4-.25-.75-.38-1.01-.44c.26-.95-.11-1.7-.62-2.26c-.77-.82-1.56-.94-1.56-.94c.26-.5.36-1.1.22-1.68c-.16-.71-.55-1.16-1.06-1.46c-.52-.31-1.16-.46-1.82-.58c-.32-.06-1.65-.25-2.2-1.01c-.45-.62-.46-1.74-.58-2.07c-.05-.13-.12-.2-.26-.2M16
                                9.61c.07 0 .13.01.19.01c1.43.16 2.45 1.54 2.28 3.07c-.17 1.53-1.47 2.65-2.9
                                2.49c-1.43-.18-2.45-1.53-2.28-3.07c.16-1.45 1.35-2.55 2.71-2.5m-7.38 0c1.33.04
                                2.44 1.17 2.54 2.6c.12 1.54-.95 2.87-2.38 2.98h-.01c-1.43.11-2.69-1.05-2.81-2.59c-.11-1.54.96-2.87
                                2.39-2.98c.09-.01.18-.01.27-.01m.02 1.7c-.04 0-.07 0-.11.01c-.56.07-.96.58-.89
                                1.13a1 1 0 0 0 1.13.87c.56-.07.96-.58.9-1.13a1.01 1.01 0 0 0-1.03-.88m7.3.02c-.52.02-.94.42-.98.95a1
                                1 0 0 0 .95 1.06a1.008 1.008 0 1 0 .14-2.01h-.11m-7.23 4.82c.29-.01.55.08.79.13c1.18.22
                                2.2.25 2.69.25c.49 0 1.5-.03 2.67-.25c.41-.08.88-.25 1.25 0c.48.32.13 1.47-.61 2.25a4.53
                                4.53 0 0 1-3.31 1.38c-1.78 0-2.86-.91-3.31-1.38c-.74-.78-1.09-1.93-.62-2.25c.14-.09.29-.13.45-.13z'/>
                      </SvgIcon>
                    </Grid>
                    <Grid item xl={ 4 } xs={ 4 } >
                      <Warning fontSize='large' color={ row.urgent ? 'error' : 'disabled' } />
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align='right'>
                  <ButtonGroup variant='text'>
                    <Button color='secondary'> Patient's Comments </Button>
                    <Button color='secondary'> Clinician's Comments </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RecordList;