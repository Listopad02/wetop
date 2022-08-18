import { Container } from "@mui/material";
import { FormattedMessage } from 'react-intl'

export default function Footer() {
  return (
    <Container sx={{ mt: 10, mb: 2, fontSize: 14, color: "#888" }}>
      <FormattedMessage id="weTop" />
      <br />
      <FormattedMessage id="rights" />
    </Container>
  );
}
