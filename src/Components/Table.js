import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Avatar } from '@mui/material';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import TableLoader from './TableLoader';
import { deleteUserAction, usersListAction, userDetailsAction } from "../Redux/Actions/userAction";
import EditUser from "./EditUser"

export default function CustomizedTables() {
    const dispatch = useDispatch();
    const [singelUser, setSingleUser] = useState(null);
    const userDetails = useSelector((state) => state.userList);
    const userInfo = useSelector((state) => state.userInfo);
    const { loading, users, error } = userDetails;
    const { person } = userInfo;
    const [hide, setHide] = useState(true)

    React.useEffect(() => {
        dispatch(usersListAction());
    }, [dispatch]);

    const deleteUser = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteUserAction(id));
        }
        dispatch(usersListAction());
    };

    const userDetail = (id) => {
        setHide(!hide)
        dispatch(userDetailsAction(id));
    };


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

    return (
        <>
            <EditUser hide={hide}/>
            <Container style={{ marginTop: "2rem" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Profile Pic</StyledTableCell>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="left">Email</StyledTableCell>
                                <StyledTableCell align="left">Website</StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {!!loading && (<>
                                <TableLoader />
                                <TableLoader />
                                <TableLoader />
                            </>)}
                            {!!users && (users?.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row">
                                        <Avatar />
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.email ? row.email : "-"}</StyledTableCell>
                                    <StyledTableCell align="left">{row.website ? row.website : "-"}</StyledTableCell>
                                    <StyledTableCell align="left" style={{ cursor: "pointer" }} onClick={() => userDetail(row.id)}><BorderColorOutlinedIcon /></StyledTableCell>
                                    <StyledTableCell align="left" onClick={() => deleteUser(row.id)} style={{ cursor: "pointer" }}><DeleteOutlineOutlinedIcon /></StyledTableCell>
                                </StyledTableRow>
                            )))
                            }
                            {!!error && <StyledTableRow>
                                <StyledTableCell component="th" scope="row" align="center">
                                    Data couldn't be Loaded!
                                </StyledTableCell>
                            </StyledTableRow>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}