import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { capitalizeString, getMarkColor } from "../../../utils";

function StudentList({ list, cityMap, onRemove }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState();

  const handleClickRemove = (student) => {
    setSelectedStudent(student);
    setOpen(true);
  };

  const handleRemoveConfirm = () => {
    onRemove(selectedStudent);
    setOpen(false);
  };

  return (
    <Box>
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
                  {cityMap[student.city]
                    ? cityMap[student.city].name
                    : undefined}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginRight: theme.spacing(1) }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleClickRemove(student)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure delete?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to remove student named{" "}
            <b>"{selectedStudent?.name}"</b>.
            <br />
            This action can&apos;t be undo.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleRemoveConfirm}
            autoFocus
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default StudentList;
