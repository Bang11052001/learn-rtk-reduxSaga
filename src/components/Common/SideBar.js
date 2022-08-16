import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Dashboard, PeopleAlt } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  backgroundColor: theme.palette.action.selected,

  "&.active > li": {
    backgroundColor: theme.palette.action.selected,
  },
}));

export default function SideBar() {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <StyledNavLink to="/admin/dashboard">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </StyledNavLink>
          <StyledNavLink to="/admin/students">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAlt />
                </ListItemIcon>
                <ListItemText primary="students" />
              </ListItemButton>
            </ListItem>
          </StyledNavLink>
        </List>
      </nav>
    </Box>
  );
}
