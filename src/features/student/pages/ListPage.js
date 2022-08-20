import {
  Box,
  Button,
  LinearProgress,
  Pagination,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentList } from "../components";
import { studentActions } from "../studentSlice";
import { selectCityMap } from "../../city/citySlice";
import StudentFilters from "../components/StudentFilters";

function ListPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isLoading, list, filter, pagination } = useSelector(
    (state) => state.student
  );
  const cityMap = useSelector(selectCityMap);

  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter]);

  const handlePageChange = (event, value) => {
    dispatch(studentActions.setFilter({ ...filter, _page: value }));
  };

  const handleSearchChange = (newFilter) => {
    dispatch(studentActions.setFilterWithDebounce(newFilter));
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
          marginBottom: theme.spacing(2),
        }}
      >
        <Typography variant="h5" align="left">
          Students
        </Typography>
        <Button variant="contained">Add new Student</Button>
      </Box>

      {/* Search  */}
      <Box mt={2} mb={2}>
        <StudentFilters
          filter={filter}
          onSearchChange={handleSearchChange}
        ></StudentFilters>
      </Box>

      {/* Student List  */}
      <Paper sx={{ border: `1px solid ${theme.palette.divider}` }}>
        <StudentList list={list} cityMap={cityMap} />
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
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}

export default ListPage;
