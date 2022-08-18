import { Container, Grid } from "@mui/material";
import { FormattedMessage } from 'react-intl'

export default function About() {
  return (
    <Container maxWidth="lg" className="scrollAbout">
      <Grid container>
        <Grid
          item
          lg={5}
          sx={{
            display: { xs: "none", md: "none", lg: "flex" },
          }}
        >
          <img className="img" src="./images/about.png" />
        </Grid>
        <Grid item xs={12} md={12} lg={7}>
          <div className="about">
            <div>
              <div className="description borderBottom">
                <div className="caption">
                  <FormattedMessage id="about" />
                </div>
                <div>
                  <FormattedMessage id="foundation" />
                </div>
              </div>
              <div className="description borderTop">
                <div className="caption">
                  <FormattedMessage id="fullCycle" />
                </div>
                <div>
                  <FormattedMessage id="description" />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
