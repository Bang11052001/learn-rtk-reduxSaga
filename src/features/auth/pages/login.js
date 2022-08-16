import { Button, Paper, Typography, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../authSlice";

const Root = styled("div")((theme) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
}));

function LoginPage() {
  const dispatch = useDispatch();
  const isLoadding = useSelector((state) => state.auth.isLoading);
  return (
    <Root>
      <Paper
        evalation={3}
        sx={{
          padding: "24px",
        }}
      >
        <Typography>Student Management </Typography>
        <Box mt={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => dispatch(authActions.loginRequest())}
          >
            {isLoadding && <CircularProgress size={20} color={"secondary"} />}
            &nbsp; Login
          </Button>
        </Box>
      </Paper>
    </Root>
  );
}

export default LoginPage;
