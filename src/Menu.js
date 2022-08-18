import {
  Container,
  Grid,
  Box,
  ButtonGroup,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  IconButton,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { LOCALES } from "./Lang/Lang";
import { useState } from "react";

export default function Menu({ menu, currentLocale, langChange }) {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState({ right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => scroll(item.src)}>
              <ListItemText primary={currentLocale === 'ru-RU' ? item.label : item.labelEng} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const languages = [
    { name: "ENGLISH", code: LOCALES.ENGLISH },
    { name: "РУССКИЙ", code: LOCALES.RUSSIAN },
  ];
  function scroll(elem) {
    const sc = document.querySelector(elem);
    var rect = sc.getBoundingClientRect();
    window.scrollTo({
      top: rect.top,
      behavior: "smooth",
    });
  }
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} md={12} lg={6}>
          <div className="logo">
            <div className="wetop">WETOP</div>
            <div className="slogan">
              <div>
                <FormattedMessage id="studio" />
              </div>
              <div>
                <FormattedMessage id="sites" />
              </div>
              <Box
                sx={{
                  display: { xs: "flex", md: "none", lg: "none" },
                  position: "relative",
                }}
              ></Box>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={0}
          md={0}
          lg={6}
          sx={{ display: "flex", pt: 2, pb: 2, justifyContent: "right" }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "none", lg: "flex" },
            }}
          >
            <ButtonGroup variant="text">
              {menu.map((item, i) => (
                <Button
                  key={i}
                  onClick={() => scroll(item.src)}
                  sx={{ color: "white" }}
                >
                  {currentLocale === "ru-RU" ? item.label : item.labelEng}
                </Button>
              ))}
            </ButtonGroup>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginLeft: { md: "none", lg: "20px" },
              }}
            >
              <button
                style={{
                  cursor: "pointer",
                  color: "white",
                  paddingRight: "1px",
                  background: "transparent",
                  border: "none",
                  fontSize: "15px",
                }}
                onClick={langChange}
                value="ru-RU"
              >
                RUS
              </button>
              <div style={{ lineHeight: "33px" }}>/</div>
              <button
                style={{
                  cursor: "pointer",
                  color: "white",
                  paddingLeft: "1px",
                  background: "transparent",
                  border: "none",
                  fontSize: "15px",
                }}
                onClick={langChange}
                value="en-US"
              >
                ENG
              </button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "flex", lg: "none" },
              position: "absolute",
            }}
          >
            <div>
              {["right"].map((anchor) => (
                <div>
                  <IconButton onClick={toggleDrawer(anchor, true)}>
                    {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                    <MenuIcon size="large">{anchor}</MenuIcon>
                  </IconButton>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                    <Box sx={{ display: "flex", marginLeft: "10px" }}>
                      <button
                        style={{
                          cursor: "pointer",
                          color: "#222",
                          paddingRight: "1px",
                          background: "transparent",
                          border: "none",
                          fontSize: "15px",
                        }}
                        onClick={langChange}
                        value="ru-RU"
                      >
                        RUS
                      </button>
                      <div style={{ lineHeight: "14px" }}>/</div>
                      <button
                        style={{
                          cursor: "pointer",
                          color: "#222",
                          paddingLeft: "1px",
                          background: "transparent",
                          border: "none",
                          fontSize: "15px",
                        }}
                        onClick={langChange}
                        value="en-US"
                      >
                        ENG
                      </button>
                    </Box>
                  </SwipeableDrawer>
                </div>
              ))}
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
