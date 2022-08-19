import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

import DashBoard from "../../features/dashboard";
import StudentFeature from "../../features/student";
import { Header, SideBar } from "../Common";

const Root = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "240px 1fr",
  gridTemplateRows: "auto 1fr",
  gridTemplateAreas: '"header header" "sidebar main"',
  minHeight: "100vh",
}));

const BoxSideBar = styled(Box)(({ theme }) => ({
  gridArea: "sidebar",
  borderRight: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));

const BoxMain = styled(Box)(({ theme }) => ({
  gridArea: "main",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2, 3),
}));

function AdminLayout() {
  return (
    <Root>
      <Box sx={{ gridArea: "header" }}>
        <Header></Header>
      </Box>
      <BoxSideBar>
        <SideBar></SideBar>
      </BoxSideBar>
      <BoxMain>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/students/*" element={<StudentFeature />} />
        </Routes>
      </BoxMain>
    </Root>
  );
}

export default AdminLayout;
