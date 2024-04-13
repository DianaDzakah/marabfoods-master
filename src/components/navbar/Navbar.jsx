import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
  createTheme,
  ThemeProvider,
  Button,
  Link,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";

import {
  Brightness4,
  Brightness7,
  LocalMall,
  ShoppingCart,
  Person,
  FilterList,
  Search,
  Home as HomeIcon,
  LibraryBooks as LibraryBooksIcon,
  Storefront as StorefrontIcon,
} from "@mui/icons-material";

import { green } from "@mui/material/colors";
import LinearDeterminate from "./LinearDeterminate";
import styles from "./nav.module.css";

import logoImage from "../../assets/images/marab.logo.png";

const ThemeContext = React.createContext();

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const theme = useTheme();

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          primary: {
            main: isDarkMode ? "#388e3c" : "#4CAF50",
          },
          background: {
            default: isDarkMode ? "#303030" : "#ffffff",
          },
        },
      })}
    >
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <Box className={styles.container}>
          <AppBar position="static" className={styles.navbar}>
            <Toolbar>
              <Typography variant="h6" component="div" className={styles.brand}>
                <img
                  src={logoImage} // Use the imported logo image
                  alt="Logo"
                  className={styles.logo}
                />
                <Link href="/" color="inherit" underline="none">
                  <strong>MarabFoods</strong>
                </Link>
              </Typography>
              <div className={styles.rightSection}>
                <div className={styles.searchBar}>
                  <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                  <IconButton color="inherit" onClick={handleMenuClick}>
                    <FilterList />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Filter Option 1
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                      Filter Option 2
                    </MenuItem>
                  </Menu>
                </div>
                <IconButton color="inherit" onClick={toggleTheme}>
                  {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <IconButton color="inherit" component={Link} href="/cart">
                  <ShoppingCart />
                </IconButton>
                <IconButton color="inherit" component={Link} href="/signup">
                  <Person />
                </IconButton>
              </div>
            </Toolbar>
            <LinearDeterminate />
          </AppBar>

          <AppBarNavigationLinks />
        </Box>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

const AppBarNavigationLinks = () => (
  <Box className={styles.navLinks}>
  <NavButton href="/home" icon={<HomeIcon />} label="Home" />
  <NavButton href="/pages/about" label="About Us" />
  <NavButton href="/pages/contact" label="Contact Us" />
  <NavButton href="/pages/gallery" label="Gallery" />
  <NavButton href="/shop/products" label="Products" />
  <NavButton href="/page/Sellers" label="Sellers" /> 
  </Box>
);

const NavButton = ({ href, icon, label }) => (
  <Button color="inherit" component={Link} href={href}>
    {icon} {label}
  </Button>
);

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <div className={styles.searchContainer}>
      <Search className={styles.searchIcon} />
      <InputBase
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />
    </div>
  );
};

export default Navbar;
