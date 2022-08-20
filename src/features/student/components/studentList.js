import { Box, Button, useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useSelector } from "react-redux";
import { capitalizeString, getMarkColor } from "../../../utils";

function StudentList({ list, cityMap }) {
  const theme = useTheme();

  return (
    <TableContainer>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Mark</TableCell>
            <TableCell>City</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((student) => (
            <TableRow
              key={student.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.id}
              </TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{capitalizeString(student.gender)}</TableCell>
              <TableCell>
                <Box color={getMarkColor(student.mark)} fontWeight="bold">
                  {student.mark}
                </Box>
              </TableCell>
              <TableCell>
                {cityMap[student.city] ? cityMap[student.city].name : undefined}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginRight: theme.spacing(1) }}
                >
                  Edit
                </Button>
                <Button variant="outlined" color="secondary">
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentList;
