import { Container, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import { FormattedMessage } from 'react-intl'

export default function Contacts() {
  return (
    <Container className="scrollCon">
      <Grid container>
        <Grid item xs={12}>
          <div className="description">
            <div className="caption">
              <FormattedMessage id="contacts" />
            </div>
          </div>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className="contacts">
              <div>
                <div>
                  <HomeIcon />
                </div>
                <div>
                  <FormattedMessage id="address" />
                </div>
              </div>
              <div>
                <div>
                  <PhoneInTalkIcon />
                </div>
                <div>
                  <a href="tel:+74959189807">+7 (495) 918-98-07</a>
                </div>
              </div>
              <div>
                <div>
                  <PhoneInTalkIcon />
                </div>
                <div>
                  <a href="tel:+79680915553">+7 (968) 091-55-53</a>
                </div>
              </div>
              <div>
                <div>
                  <EmailIcon />
                </div>
                <div>
                  <a href="mailto:info@wetop.ru?subject=WETOP">info@wetop.ru</a>
                </div>
              </div>
              <div className="contactsIcon">
                <a href="https://www.behance.net/wetopwetop" target="_blank">
                  <img src="./images/be.png" />
                </a>
                <a href="https://dribbble.com/wetop" target="_blank">
                  <img src="./images/dr.png" />
                </a>
                <a href="https://vk.com/id716611134" target="_blank">
                  <img src="./images/vk.png" />
                </a>
                <a
                  href="https://wa.me/9680915553?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%AD%D1%82%D0%BE%20%D0%B2%D0%B5%D0%B1-%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%86%D0%B8%D0%BA%D0%BB%D0%B0%20WETOP"
                  target="_blank"
                >
                  <img src="./images/wt.png" />
                </a>
                <a href="https://t.me/wetopdigital" target="_blank">
                  <img src="./images/tl.png" />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
