import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import "./HeaderComp.css";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function HeaderComp({ handleDrawer }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="#5F6368"
        >
          <div className="profile-logo">
              <img src="https://lh3.googleusercontent.com/ogw/AAEL6sggfPnrV2Dnd4kGKG4eITDJOiexAtuok41zC7emLg=s32-c-mo" alt="Profile-logo"/>
              </div>
          {/* <AccountCircle /> */}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon fontSize="medium" color="action" className="list-icon" />
          </IconButton>
          {/* HERE LOGO */}
          <div className="fundoo-logo">
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="profile-logo" />
          </div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Fundoo
          </Typography>
          <Search>
            <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase style={{color:"#5F6368",backgroundColor:"#F1F3F4",borderRadius:"0.5em" }}
              placeholder="Search"
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              {/* Refresh */}
              <RefreshIcon
                fontSize="medium"
                color="action"
                className="refresh-icon"
              />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              {/* List */}
              <ViewAgendaOutlinedIcon
                fontSize="medium"
                color="action"
                className="list-icon"
              />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              {/* Setting Icon */}
              <SettingsOutlinedIcon
                fontSize="medium"
                color="action"
                className="setting-icon"
              />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              {/* App List */}
              <AppsOutlinedIcon
                fontSize="medium"
                color="action"
                className="option-icon"
              />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* Profile Logo */}
              <div className="profile-logo">
              <img class="gb_h gbii" src="https://lh3.googleusercontent.com/ogw/AAEL6sggfPnrV2Dnd4kGKG4eITDJOiexAtuok41zC7emLg=s32-c-mo" srcset="https://lh3.googleusercontent.com/ogw/AAEL6sggfPnrV2Dnd4kGKG4eITDJOiexAtuok41zC7emLg=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/AAEL6sggfPnrV2Dnd4kGKG4eITDJOiexAtuok41zC7emLg=s64-c-mo 2x " alt="" aria-hidden="true" data-noaft=""></img>
              </div>
              
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

// import "./HeaderComp.css";
// import React from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

// export default function header({handleDrawer}) {
//    return (
//      <div>
//       <div className="header-container">
//         <div className="left-container">
//         <div className="menu-icon">
//         <MenuIcon color="action" className="menu-icon" onClick={handleDrawer}/>
//         </div>
//         <div className="logo">
//         <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation"/>
//         </div>
//         <h2 className="Fundoo-Heading">
//           Fundoo
//         </h2>
//         </div>
//         <div className="middle-container">
//           <div className="search-input">
//             <div className="search-logo">
//               <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg>
//             </div>
//             <div className="input-bar">
//             <input type="text" placeholder="Search"/>
//             </div>

//           </div>
//           <div className="icon-container">
//             <div className="refresh">
//             <RefreshIcon fontSize='medium' color="action" className="refresh-icon"/>
//             </div>
//             <div className="list-view">
//             <ViewAgendaOutlinedIcon fontSize='medium' color="action" className="list-icon"/>
//             </div>
//             <div className="setting">
//             <SettingsOutlinedIcon fontSize='medium' color="action" className="setting-icon"/>
//             </div>
//           </div>
//         </div>

//         <div className="right-container">
//           <div className="profile-menu">
//             <div className="app-options">
//             <AppsOutlinedIcon fontSize='medium' color="action" className="option-icon"/>
//             </div>
//             <div className="profile">
//             <img src="https://lh3.googleusercontent.com/ogw/AAEL6sggfPnrV2Dnd4kGKG4eITDJOiexAtuok41zC7emLg=s32-c-mo"  alt="" aria-hidden="true" data-noaft=""/>
//             </div>
//           </div>
//         </div>
//       </div>
//      </div>
//    )
//  }
