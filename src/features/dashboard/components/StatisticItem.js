import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function StatisticItem({ icon, value, label }) {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 12px",
        boxShadow: "10px 10px solid #ccc",
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      {icon}
      <div>
        <Typography variant="h5">{value}</Typography>
        <Typography variant="caption">{label}</Typography>
      </div>
    </Paper>
  );
}

export default StatisticItem;
