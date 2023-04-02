import React, { useState } from "react";
import { Drawer,AppBar,Grid,Toolbar, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "../../../store/tokens/Action";
import { toast } from "react-toastify";
import { TokenState } from "../../../store/tokens/TokensReducer";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: 200,
  },
}));

function Navbar() {
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function goLogout() {
    dispatch(addToken(""));
    toast.success("Usuário deslogado", {
      theme: "colored",
    });

    navigate("/login");
  }

  let hamburgerComponent = null;
  let navbarComponent = null;
  if(token !== ''){
    navbarComponent =<Box mx={1} className="cursor sair" onClick={goLogout}>
        <Typography className="corDaLetra" variant="h6" color="inherit">
           Sair da Loja
        </Typography>
    </Box>
        }else{
          navbarComponent =<Box mx={1} className="cursor sair">
            <Link to="/login" className="text-decorator-none1"> 
          <Typography className="corDaLetra" variant="h6" color="inherit">
             Login
          </Typography>
          </Link>
      </Box>
    }

  if(token !== ''){
    hamburgerComponent = <Box>
    <ListItem className="sairMenu" onClick={goLogout}>
    <Typography  variant="h6" color="inherit" >
      Sair da Loja
    </Typography>
</ListItem>
    </Box>
  }    

  return (
    <>
    <Grid className="menuHamburger">
       <IconButton id='corMenu'
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Drawer id="cor"
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        className={classes.drawer}
      >
          <ListItem  button onClick={toggleDrawer}>
          <Link to="/home" className="text-decorator-none1">
            <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem  button onClick={toggleDrawer}>
          <Link to="/categorias" className="text-decorator-none1">
            <ListItemText primary="Categorias" />
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
          <Link to="/produtos" className="text-decorator-none1">
            <ListItemText primary="Produtos" />
            </Link>
          </ListItem>
        <List className='lista' >
          <ListItem button onClick={toggleDrawer}>
          <Link to='/dicasplantacao' className="text-decorator-none1">
            <ListItemText primary="Dicas de Plantação" />
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
          <Link to='/colaboradores' className="text-decorator-none1">
            <ListItemText primary="Colaboradores" />
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
          <Link to='/compras' className="text-decorator-none1">
            <ListItemText primary="Compras" />
            </Link>
          </ListItem>
        {hamburgerComponent}
        </List>
      </Drawer>
        </Grid>
     <AppBar className="barra" position="static">
    <Toolbar variant="regular">
          <Box width="100%" display="flex" justifyContent="space-between">
            <Box display="flex">
              <img src="https://imgur.com/QgknDQx.png" alt="" width="60" />
              <Box mx={1} className="cursor">
                <Link to="/home" className="text-decorator-none1">
                  <Typography className="corDaLetra left" variant="h6" color="initial">
                    Home
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="cursor">
                <Link to="/categorias" className="text-decorator-none1">
                  <Typography className="corDaLetra" variant="h6" color="inherit">
                    Categorias
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="cursor">
                <Link to="/produtos" className="text-decorator-none1">
                  <Typography className="corDaLetra" variant="h6" color="inherit">
                    Produtos
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="cursor">
                <Link to='/dicasplantacao' className="text-decorator-none1">
                  <Typography className="corDaLetra" variant="h6" color="inherit">
                    Dicas de Plantação
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="cursor">
                <Link to='/colaboradores' className="text-decorator-none1">
                  <Typography className="corDaLetra" variant="h6" color="inherit">
                    Colaboradores
                  </Typography>
                </Link>
              </Box>
                </Box>
            {navbarComponent}
          </Box>
    </Toolbar>
  </AppBar>
      
      
    </>
    );
  
 }


export default Navbar;