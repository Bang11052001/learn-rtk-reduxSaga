import { Paper, Typography, Box, useTheme } from "@mui/material";

function Widget({ title, children }) {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        padding: `${theme.spacing(2)}`,
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="h5" align="left">
        {title}
      </Typography>
      <Box mt={2}>{children}</Box>
    </Paper>
  );
}

export default Widget;
