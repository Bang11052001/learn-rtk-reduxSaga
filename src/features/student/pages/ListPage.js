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
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import studentApi from "../../../api/studentsApi";
import { selectCityList, selectCityMap } from "../../city/citySlice";
import { StudentList, StudentFilters } from "../components";
import { studentActions } from "../studentSlice";

function ListPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isLoading, list, filter, pagination } = useSelector(
    (state) => state.student
  );
  const cityMap = useSelector(selectCityMap);
  const cityList = useSelector(selectCityList);

  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter]);

  const handlePageChange = (event, value) => {
    dispatch(studentActions.setFilter({ ...filter, _page: value }));
  };

  const handleSearchChange = (newFilter) => {
    dispatch(studentActions.setFilterWithDebounce(newFilter));
  };

  const handleChange = (newFilter) => {
    dispatch(studentActions.setFilter(newFilter));
  };

  const handleRemove = async (student) => {
    try {
      await studentApi.remove(student.id);

      toast.success("Delete success!");
      const newFilter = { ...filter };
      dispatch(studentActions.fetchStudentList(newFilter));
    } catch (err) {
      console.log(err);
    }
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

        <Link style={{ textDecoration: "none" }} to={`/admin/students/add`}>
          <Button variant="contained">Add new Student</Button>
        </Link>
      </Box>

      {/* Search  */}
      <Box mt={2} mb={2}>
        <StudentFilters
          filter={filter}
          onSearchChange={handleSearchChange}
          cityList={cityList}
          onChange={handleChange}
        ></StudentFilters>
      </Box>

      {/* Student List  */}
      <Paper sx={{ border: `1px solid ${theme.palette.divider}` }}>
        <StudentList list={list} cityMap={cityMap} onRemove={handleRemove} />
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
