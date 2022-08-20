import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function StudentFilters({ filter, onSearchChange, cityList, onCityChange }) {
  const hanleSearchChange = (e) => {
    if (!onSearchChange) return;

    const newFilter = {
      ...filter,
      _page: 1,
      name_like: e.target.value,
    };

    onSearchChange(newFilter);
  };

  const handleCityChange = (e) => {
    if (!onCityChange) return;

    const newFilter = {
      ...filter,
      _page: 1,
      city: e.target.value || undefined,
    };

    onCityChange(newFilter);
  };

  console.log(cityList);

  return (
    <Grid container columnSpacing={2}>
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
      <Grid item xs={12} md={6} lg={3}>
        <FormControl fullWidth size="small">
          <InputLabel>Filter by City</InputLabel>
          <Select
            label="Filter by City"
            onChange={handleCityChange}
            value={filter.city || ""}
          >
            <MenuItem value="">All</MenuItem>
            {cityList.map((city, index) => (
              <MenuItem key={index} value={city.code}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default StudentFilters;
