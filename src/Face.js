import { Container, Grid, Button } from "@mui/material";
import { FormattedMessage } from 'react-intl'

export default function Face({ openModal }) {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} md={12} lg={7}>
          <div className="face">
            <div>
              <div className="face_o">
                <div>
                  <FormattedMessage id="webSites" />
                  <br />
                  <FormattedMessage id="services" />
                  <br />
                </div>
                <div>
                  <FormattedMessage id="applications" />
                </div>
              </div>
              <div className="face_t">
                <FormattedMessage id="jobs" />
              </div>
              <div>
                <Button
                  onClick={openModal}
                  variant="contained"
                  sx={{ mt: 3 }}
                  size="large"
                >
                  <FormattedMessage id="applicationBtn" />
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={5}
          sx={{
            display: { xs: "none", md: "none", lg: "flex" },
          }}
        >
          <img className="img" src="./images/head.png" />
        </Grid>
      </Grid>
    </Container>
  );
}
