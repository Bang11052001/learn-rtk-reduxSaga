import { Search } from "@mui/icons-material";
import { Box, Grid, TextField } from "@mui/material";

function StudentFilters({ filter, onSearchChange }) {
  const hanleSearchChange = (e) => {
    if (!onSearchChange) return;

    const newFilter = {
      ...filter,
      _page: 1,
      name_like: e.target.value,
    };

    onSearchChange(newFilter);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={6}>
        <Box>
          <TextField
            id="outlined-basic"
            label="Search by name"
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: <Search />,
            }}
            onChange={(e) => hanleSearchChange(e)}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default StudentFilters;
