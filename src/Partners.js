import { Container, Grid } from "@mui/material";
import { FormattedMessage } from 'react-intl'

export default function Partners() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <div className="description">
            <div className="caption">
              <FormattedMessage id="partners" />
            </div>
          </div>
        </Grid>
        <Grid container className="partIcon">
          <Grid item xs={6} md={3} sx={{ pt: 5 }}>
            <img src="./images/2gis.png" />
          </Grid>
          <Grid item xs={6} md={3} sx={{ pt: 5 }}>
            <img src="./images/catery.png" />
          </Grid>
          <Grid item xs={6} md={3} sx={{ pt: 5 }}>
            <img src="./images/delivery.png" />
          </Grid>
          <Grid item xs={6} md={3} sx={{ pt: 5 }}>
            <img src="./images/iiko.png" />
          </Grid>
          <Grid item xs={6} md={3} sx={{ pt: 5 }}>
            <img src="./images/obedru.png" />
          </Grid>
          <Grid item xs={6} md={3} sx={{ pt: 5 }}>
            <img src="./images/yandex.png" />
          </Grid>
          <Grid item xs={6} md={3} sx={{ pt: 5 }}>
            <img src="./images/yandex2.png" />
          </Grid>
          <Grid item xs={6} md={3} sx={{ pt: 5 }}>
            <img src="./images/zoon.png" />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
