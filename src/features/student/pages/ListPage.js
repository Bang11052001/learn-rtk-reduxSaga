import { Typography, Box, Paper, useTheme, Button } from "@mui/material";
import { StudentList } from "../components";

function ListPage() {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: theme.spacing(2),
        }}
      >
        <Typography variant="h5" align="left">
          Students
        </Typography>
        <Button variant="contained">Add new Student</Button>
      </Box>
      <Paper sx={{ border: `1px solid ${theme.palette.divider}` }}>
        <StudentList />
      </Paper>
    </Box>
  );
}

export default ListPage;
