import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { styled, TableCell, tableCellClasses, TableRow } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
    fontSize: 16
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TableLoader() {
  return (
  <>
    <StyledTableRow >
      <StyledTableCell component="th" scope="row">
        <Skeleton variant="circular" width={40} height={40} />
      </StyledTableCell>
      <StyledTableCell component="th" scope="row">
        <Skeleton animation="wave" />
      </StyledTableCell>
      <StyledTableCell align="left"> <Skeleton animation="wave" /></StyledTableCell>
      <StyledTableCell align="left"> <Skeleton animation="wave" /></StyledTableCell>
      <StyledTableCell align="left"> <Skeleton animation="wave" /></StyledTableCell>
      <StyledTableCell align="left"> <Skeleton animation="wave" /></StyledTableCell>
      <StyledTableCell align="left"></StyledTableCell>
      <StyledTableCell align="left"></StyledTableCell>
    </StyledTableRow>
  </>
  );
}