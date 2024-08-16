import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import DrawerItem from "./DrawerItem";

import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "#03051E",
        color: "#ffff",
        height: "4rem",
        width: "100%",
      }}
      elevation={4}
    >
      <StyledToolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "#ffffff",
            textDecoration: 'none',
            "&:hover": {
              backgroundColor: "transparent",
              color: "orange",
              fontWeight: "bold",
            },
          }}
        >
          RealEstate Pakistan
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  sx={{
                    color: "#fffff",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "orange",
                      fontWeight: "bold",
                    },
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
