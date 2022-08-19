import {
  Box,
  Button,
  LinearProgress,
  Pagination,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentList } from "../components";
import { studentActions } from "../studentSlice";

function ListPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isLoading, filter, pagination } = useSelector(
    (state) => state.student
  );

  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter]);

  const handleChange = (event, value) => {
    dispatch(studentActions.setFilter({ ...filter, _page: value }));
  };

  return (
    <Box sx={{ position: "relative", paddingTop: theme.spacing(1) }}>
      {/* Loading */}
      {isLoading && (
        <LinearProgress
          sx={{
            position: "absolute",
            width: "100%",
            marginTop: theme.spacing(-2),
          }}
        />
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
          marginBottom: theme.spacing(2),
        }}
      >
        <Typography variant="h5" align="left">
          Students
        </Typography>
        <Button variant="contained">Add new Student</Button>
      </Box>

      {/* Student List  */}
      <Paper sx={{ border: `1px solid ${theme.palette.divider}` }}>
        <StudentList />
      </Paper>

      {/* Pagination  */}
      <Box
        sx={{
          marginTop: theme.spacing(2),
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          color="primary"
          count={Math.ceil(pagination._totalRows / pagination._limit)}
          page={filter._page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}

export default ListPage;
