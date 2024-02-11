import "./Table.css"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(product_name, price, quantity, discount, delivered) {
    return { product_name, price, quantity, discount, delivered };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, "Delivered"),
    createData('Ice cream sandwich', 237, 9.0, 37, "Delivered"),
    createData('Eclair', 262, 16.0, 24, "Delivered"),
    createData('Cupcake', 305, 3.7, 67, "Not Delivered"),
    createData('Gingerbread', 356, 16.0, 49, "Not Delivered"),
];

export default function BasicTable() {
    return (
        <div className='Table'>
            <h3>Recent Orders</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            <TableCell align="left">Discount</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.product_name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.product_name}
                                </TableCell>
                                <TableCell align="left">{row.price}</TableCell>
                                <TableCell align="left">{row.quantity}</TableCell>
                                <TableCell align="left">{row.discount}</TableCell>
                                <TableCell align="left"  style={{ color: row.delivered === 'Delivered' ? "green.300" : "red" }}>
                                    <span className={row.delivered === 'Delivered' ? "delivered" : "not_delivered"}>
                                        {row.delivered}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
