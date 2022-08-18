import "./fonts/fonts.css";
import { useState, useRef } from "react";
import Menu from "./Menu.js";
import Face from "./Face.js";
import About from "./About.js";
import Indent from "./Indent.js";
import Portfolio from "./Portfolio.js";
import Jobs from "./Jobs.js";
import Partners from "./Partners.js";
import Contacts from "./Contacts.js";
import Footer from "./Footer.js";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import { LOCALES } from "./Lang/Lang"
import { messages } from "./Lang/messages"
import { IntlProvider } from 'react-intl'
import { FormattedMessage } from 'react-intl'

init("VFUPT47TEmjgFCQk1");

const theme = createTheme({
  palette: {
    primary: {
      main: "#311b92",
      ligth: "#6746c3",
      dark: "#000063",
    },
    secondary: {
      main: "#4a148c",
      ligth: "#7c43bd",
      dark: "#12005e",
    },
  },
});

const menu = [
  { label: "О компании", labelEng: "About us", src: ".scrollAbout" },
  { label: "Портфолио", labelEng: "Portfolio", src: ".scrollPort" },
  { label: "Услуги", labelEng: "Services", src: ".scrollJob" },
  { label: "Контакты", labelEng: "Contacts", src: ".scrollCon" },
];

const portfolio = [
  {
    img: "../images/111.jpg",
    title: "Frantsuz GO",
    info: "Разработали мобильное приложения и web-сервис для удобной доставки клиента домой. Результат: автоматизация просьб клиентов и работы администраторов. Добавили возможность дальнейшего внедрения в службу доставки.",
    infoEng: "We developed a mobile application and a web service for a convenient delivery of a client home. Result: automation of customer requests and the work of administrators. Added the possibility of further implementation in the delivery service.",
    url: "https://wetop-69.github.io/fruntsuz-go/",
  },
  {
    img: "../images/222.jpg",
    title: "Frantsuz Club",
    info: "Создали продающий сайт в сфере развлечений. Результат: Провели UX-аудит, изменили структуру сайта, сделали его удобным для пользователей, разработали адаптивную версию. Подготовили к дальнейшему продвижению в интернете. Добавили разделы с новыми услугами и возможностями компании.",
    infoEng: "Created a selling site in the field of entertainment. Result: Conducted a UX audit, changed the structure of the site, made it user-friendly, developed an adaptive version. Prepared for further promotion on the Internet. Added sections with new services and opportunities of the company.",
    url: "https://frantsuz-club.ru/",
  },
  {
    img: "../images/333.jpg",
    title: "TYT EDA",
    info: "Разработали интернет-магазин для доставки готовой продукции. Результат: личный кабинет с разделами личных данных и истории заказов ускоряет работу администратора, система фильтрации и сортировки в каталоге позволяет легко разобраться с заказами, подключена онлайн-оплата через эквайринг «Сбербанка».",
    infoEng: "Developed an online store for the delivery of finished products. Result: a personal account with sections of personal data and order history speeds up the work of the administrator, the filtering and sorting system in the catalog makes it easy to deal with orders, online payment is connected through Sberbank acquiring.",
    url: "https://tyteda.ru/",
  },
  {
    img: "../images/444.jpg",
    title: "TYT EDA",
    info: "Корпоративное питание. Разработали полноценный интернет-магазин корпоративного питания сотрудников взамен лендинга, выполнявшего ранее те же функции. Результат: админ-панель ускорила работу небольшой кухни и устранила проблемы с задержками, личный кабинет для выбора меню на каждый день как конкурентное преимущество.",
    infoEng: "Corporate food. We developed a full-fledged online store for corporate catering for employees instead of a landing page that previously performed the same functions. Result: the admin panel accelerated the work of a small kitchen and eliminated problems with delays, a personal account for choosing a menu for every day as a competitive advantage.",
    url: "https://corp-pitanie.tyteda.ru/",
  },
  {
    img: "../images/555.jpg",
    title: "Frantsuz Booking",
    info: "Внедрили систему онлайн-бронирования с помощью сайта и мобильного приложения. Результат: повышение доверия у клиента, удобная система заменяет целого администратора и ускоряет процесс работы официантов.",
    infoEng: "Implemented an online booking system using a website and a mobile application. Result: increased customer confidence, a convenient system replaces an entire administrator and speeds up the work of waiters.",
    url: "/",
  },
  {
    img: "../images/666.jpg",
    title: "Comicadze",
    info: "По запросу клиента мы создали уникальный сайт с целью увеличить трафик. Минималистичный лендинг привлекает своей упаковкой, а юзабилити сайта позволяет быстро найти клиенту нужный раздел.",
    infoEng: "At the request of the client, we created a unique website in order to increase traffic. A minimalistic landing attracts with its packaging, and the usability of the site allows the client to quickly find the desired section.",
    url: "https://comicadze.ru/",
  },
  {
    img: "../images/888.jpg",
    title: "Пою всегда",
    titleEng: "I sing always",
    info: "Разработали уникальный дизайн сайт для привлечения аудитории, которой будет интересно участие в музыкальном шоу. Результат: Красивый лендинг дает базу для привлечения трафика.",
    infoEng: "We developed a unique website design to attract an audience that would be interested in participating in a music show. Result: A beautiful landing page provides a base for attracting traffic.",
    url: "https://poyuvsegda.ru/",
  },
  {
    img: "../images/999.jpg",  // 999
    title: "Корпоративное питание",
    titleEng: "Corporate catering",
    info: "Разработали интернет-магазин для заказа и доставки еды сотрудникам компаний. Результат: удобный интерфейс позволяет легко разобраться с заказами и обеспечить питание сотрудников.",
    infoEng: "Developed an online store for ordering food and it's delivery to company employees. Result: a user-friendly interface makes it easy to deal with orders and provide meals to employees.",
    url: "https://corp-pitanie.tyteda.ru",
  },
  {
    img: "../images/101010.jpg",
    title: "Шашландия.рф",
    titleEng: "Shashlandia.rf",
    info: "Создали интернет-магазин для отдыха на природе, шашлыка и пикника. Результат: широкий выбор маринада для приготовления, вспомогательных товаров, блюд к шашлыку, услуги профессиональных мангальщиков, а также персональные бонусы для постоянных клиентов!",
    infoEng: "Created an online store for outdoor recreation, barbecue and picnic. The result: a wide selection of marinade for cooking, auxiliary products, barbecue dishes, services of professional grillers, as well as personal bonuses for regular customers!",
    url: "https://шашландия.рф",
  },
  {
    img: "../images/111111.jpg",
    title: "Поминки - доставка",
    titleEng: "Сommemoration - delivery",
    info: "Разработали сайт, позволяющий заказать поминальные обеды в скорбное для человека время без лишних хлопот. Результат: разработан сайт с индивидуальным подходом к каждому клиенту, на котором можно сделать заказ поминальной трапезы по оптимальному соотношению цены и качества.",
    infoEng: "We have developed an online store that allows you to order funeral dinners at a mournful time for a person without any hassle. Result: a website has been developed with an individual approach to each client, where you can order a funeral meal at the best price-quality ratio.",
    url: "http://pominki-dostavka.ru",
  },
];

const partners = [
  { img: "./images/2gis.png" },
  { img: "./images/2gis.png" },
  { img: "./images/2gis.png" },
  { img: "./images/2gis.png" },
  { img: "./images/2gis.png" },
  { img: "./images/2gis.png" },
  { img: "./images/2gis.png" },
  { img: "./images/2gis.png" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "rgba(49, 27, 146, 0.8)",
  pt: 2,
  px: 4,
  pb: 3,
};
const styleM = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "#000063",
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({ onChange }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ color: "white" }}
        type="submit"
        value="Send"
        onClick={handleOpen}
      >
        <FormattedMessage id="sendIt" />
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...styleM, boxShadow: 2 }}>
          <CloseIcon className="closeIcon" onClick={handleClose} />
          <h3 id="child-modal-title">
            <FormattedMessage id="thanks" />
          </h3>
          <p id="child-modal-description">
            <FormattedMessage id="promise" />
          </p>
          <Button
            variant="text"
            onClick={(() => handleClose, onChange)}
            sx={{ color: "white" }}
          >
            <FormattedMessage id="close" />
          </Button>
        </Box>
      </Modal>
    </>
  );
}

function App() {
  const form = useRef();
  const [currentLocale, setCurrentLocale] = useState(LOCALES.RUSSIAN)
  let locale = currentLocale

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bfw2vr3",
        "template_oq2bkxb",
        form.current,
        "VFUPT47TEmjgFCQk1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [open, setOpen] = useState(false);
  const langChange = ({ target: { value } }) => {
    setCurrentLocale(value)
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <IntlProvider messages={messages[locale]} 
                  locale={currentLocale} 
                  defaultLocale={LOCALES.ENGLISH}
    >
      <ThemeProvider theme={theme}>
        <Menu menu={menu} currentLocale={currentLocale} langChange={langChange} />
        <Container
          maxWidth="xl"
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -10,
          }}
        >
          <Face openModal={handleOpen} />
        </Container>
        <About />
        <Indent />
        <Portfolio portfolio={portfolio} currentLocale={currentLocale} />
        <Indent />
        <Jobs currentLocale={currentLocale} />
        <Indent />
        <Partners partners={partners} />
        <Indent />
        <Contacts />
        <Indent />
        <Footer />
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, boxShadow: 2 }}>
              <CloseIcon className="closeIcon" onClick={handleClose} />
              <div class="contactForm">
                <p>
                  <FormattedMessage id="offer" />
                </p>
                <form ref={form} onSubmit={sendEmail}>
                  <select name="message">
                    <option value="" disabled selected>
                      { currentLocale === "ru-RU" ? "Вам необходимо" : "Choose what you need" }
                    </option>
                    <option value={"Лендинг"}>
                      { currentLocale === "ru-RU" ? "Лендинг" : "Landing" }</option>
                    <option value={"Интернет-магазин"}>
                      { currentLocale === "ru-RU" ? "Интернет-магазин" : "Internet-shop" }</option>
                    <option value={"Корпоративный сайт"}>
                      { currentLocale === "ru-RU" ? "Корпоративный сайт" : "Corporate website" }
                    </option>
                    <option value={"Мобильное приложение"}>
                      { currentLocale === "ru-RU" ? "Мобильное приложение" : "Mobile application" }
                    </option>
                    <option value={"Подключить CRM систему"}>
                      { currentLocale === "ru-RU" ? "Подключить CRM систему" : "Connect CRM system" }
                    </option>
                    <option value={"Хочу все, сразу и быстро"}>
                      { currentLocale === "ru-RU" ? "Хочу все, сразу и быстро" : "I want everything, immediately and quickly" }
                    </option>
                    <option value={"Еще не определился"}>
                      { currentLocale === "ru-RU" ? "Еще не определился" : "Haven't decided yet" }
                    </option>
                  </select>

                  <input type="name" placeholder={ currentLocale === "ru-RU" ? "Имя" : "Name" } name="user_name"></input>

                  <input
                    name="user_phone"
                    type="phone"
                    placeholder={ currentLocale === "ru-RU" ? "Телефон" : "Phone" }
                  ></input>

                  <input
                    type="e-mail"
                    placeholder="E-mail"
                    name="user_email"
                  ></input>

                  <br />
                  <ChildModal onChange={handleClose} />
                </form>
              </div>
            </Box>
          </Modal>
        </div>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
