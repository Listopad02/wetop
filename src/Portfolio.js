import { Container, Grid, Button, Box } from "@mui/material";
import { FormattedMessage } from 'react-intl'

export default function Portfolio({ portfolio, currentLocale }) {
  return (
    <Container className="scrollPort">
      <Grid container>
        <Grid item xs={12}>
          <div className="description">
            <div className="caption">
              <FormattedMessage id="portfolio" />
            </div>
            <div>
              <FormattedMessage id="deep" />
              <br />
              <FormattedMessage id="decisions" />
              <br />
              <FormattedMessage id="example" />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {portfolio.map((item, i) => { 
          console.log('bg: ', item.img)
          return(
          <Grid key={i} item xs={12} md={12} lg={6}>
            <Box sx={{ boxShadow: 2 }}>
              <div
                style={{ backgroundImage: `url(${item.img})` }}
                className="portItem"
              >
                <div className="portCard">
                  <div className="portTitle">{currentLocale === "en-US" && item.titleEng ? item.titleEng : item.title}</div>
                  <div className="portInfo">{currentLocale === "ru-RU" ? item.info : item.infoEng}</div>
                  <div>
                    <Button
                      sx={{ color: "white" }}
                      onClick={() => window.open(item.url)}
                    >
                      <FormattedMessage id="show" />
                    </Button>
                  </div>
                </div>
              </div>
            </Box>
          </Grid>
        )})}
      </Grid>
    </Container>
  );
}
