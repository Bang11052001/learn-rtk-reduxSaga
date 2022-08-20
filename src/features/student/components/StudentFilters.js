import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRef } from "react";

function StudentFilters({ filter, onSearchChange, cityList, onChange }) {
  const searchRef = useRef();

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
    if (!onChange) return;

    const newFilter = {
      ...filter,
      _page: 1,
      city: e.target.value || undefined,
    };

    onChange(newFilter);
  };

  const handleSortChange = (e) => {
    if (!onChange) return;

    const value = e.target.value;
    const [_sort, _order] = value.split(".");

    const newFilter = {
      ...filter,
      _page: 1,
      _order: _order || undefined,
      _sort: _sort || undefined,
    };

    onChange(newFilter);
  };

  const handleClearFilter = (e) => {
    if (!onChange) return;

    const newFilter = {
      ...filter,
      _page: 1,
      _order: undefined,
      _sort: undefined,
      city: undefined,
    };

    searchRef.current.value = "";
    onChange(newFilter);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={6}>
        <Box>
          <TextField
            inputRef={searchRef}
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

      <Grid item xs={12} md={6} lg={2}>
        <FormControl fullWidth size="small">
          <InputLabel>Sort</InputLabel>
          <Select
            label="Sort"
            onChange={handleSortChange}
            value={filter._sort ? `${filter._sort}.${filter._order}` : ""}
          >
            <MenuItem value="">No Sort</MenuItem>
            <MenuItem value="mark.asc">Mark asc</MenuItem>
            <MenuItem value="mark.desc">Mark desc</MenuItem>
            <MenuItem value="name.asc">Name asc</MenuItem>
            <MenuItem value="name.desc">Name desc</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6} lg={1}>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          size="large"
          onClick={handleClearFilter}
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  );
}

export default StudentFilters;
