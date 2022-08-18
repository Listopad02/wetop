import { Container, Grid, Box } from "@mui/material";
import { FormattedMessage } from 'react-intl'

export default function Jobs({ currentLocale }) {
  return (
    <Container className="scrollJob">
      <Grid container>
        <Grid item xs={12}>
          <div className="description">
            <div className="caption">
              <FormattedMessage id="ourJobs" />
            </div>
            <div>
              <FormattedMessage id="create" />
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box className="workCard" sx={{ boxShadow: 2 }}>
            <div className="portTitle">
              <FormattedMessage id="site" />
            </div>
            <ul>
              <li data-tooltip={ currentLocale === "ru-RU" ? "Создаем одностраничный сайт, дизайн которого привлекает и делает продажи более эффективными." : "We create a one-page site, the design of which attracts and makes it more effective."}>
                <FormattedMessage id="landing" />
              </li>
              <li data-tooltip={ currentLocale === "ru-RU" ? "Благодаря удобному каталогу товаров и услуг, системе приема онлайн платежей и нашему продающему дизайну вы сможенте легко управлять ассортиментом, заказами, клиентами и скидками." : "Thanks to a convenient catalog of goods and services, an online payment system and our selling design, you can easily manage your assortment, orders, customers and discounts." }>
                <FormattedMessage id="shop" />
              </li>
              <li data-tooltip={ currentLocale === "ru-RU" ? "Ваша компания будет достойно представлена в сети и обеспечена эффективными инструментами для продаж." : "Your company will be adequately represented in the network and provided with effective sales tools." }>
                <FormattedMessage id="corporation" />
              </li>
              <li data-tooltip={ currentLocale === "ru-RU" ? "Поможем выбрать и внедрить CRM-систему в Ваш бизнеc." : "We will help you choose and implement a CRM system in your business." }>
                <FormattedMessage id="crm" />
              </li>
              <li data-tooltip={ currentLocale === "ru-RU" ? "Система управления сайтом — это программный продукт, который создан для упрощения создания основных видов сайтов." : "A content management system is a software product that is designed to simplify the creation of basic types of sites." }>
                <FormattedMessage id="cms" />
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="workCard" sx={{ boxShadow: 2 }}>
            <div>
              <div className="portTitle">
                <FormattedMessage id="application" />
              </div>
              <ul>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Мобильное приложение сделанное на базе Андроид — это коммуникационный сервис монетизации бизнеса среди 1 400 000 000 пользователей смартфонов и планшетов в Google Play Market." : "A mobile application made on the basis of Android is a communication service for business monetization among 1,400,000,000 smartphone and tablet users in the Google Play Market." }>
                  Android
                </li>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Разработка приложений для iOS: iPhone, iPad и Apple Watch." : "Application development for iOS: iPhone, iPad and Apple Watch." }>
                  IOS
                </li>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Осуществляет разработку качественного программного обеспечения для web сервисов любого уровня сложности." : "Carries out the development of high-quality software for web services of any level of complexity." }>
                  <FormattedMessage id="service" />
                </li>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Мы разрабатываем только кроссплатформенные игры для социальных сетей и под мобильные платформы Android, iOS, для девайсов iPhone и iPad." : "We develop only cross-platform games for social networks and for mobile platforms Android, iOS, for iPhone and iPad devices." }>
                  <FormattedMessage id="games" />
                </li>
              </ul>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="workCard" sx={{ boxShadow: 2 }}>
            <div>
              <div className="portTitle">
                <FormattedMessage id="design" />
              </div>
              <ul>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Логотип, фирменный знак, фирменные графические элементы, цвет или комбинация цветов, шрифты, правила композиции, фотостиль." : "Logo, brand name, branded graphic elements, color or combination of colors, fonts, composition rules, photo style." }>
                  <FormattedMessage id="style" />
                </li>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Веб дизайн сайта, адаптивный дизайн и редизайн, UX/UI дизайн интерфейсов дизайн приложений." : "Web site design, responsive design and redesign, UX/UI interface design, application design." }>
                  <FormattedMessage id="webDesign" />
                </li>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Разработка названия бренда для компании, товара или услуги, важнейшая часть маркетинговой стратегии компании, неотъемлемая часть позиционирования бренда." : "The development of a brand name for a company, product or service is an essential part of a company's marketing strategy, an integral part of brand positioning." }>
                  <FormattedMessage id="naming" />
                </li>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Совокупность визуальных составляющих компании, которые созданы для того, чтобы повысить ее узнаваемость, престиж и сформировать образ компании в глазах потребителей." : "A set of visual components of the company, which are created in order to increase its recognition, prestige and form the image of the company in the eyes of consumers." }>
                  <FormattedMessage id="identics" />
                </li>
              </ul>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="workCard" sx={{ boxShadow: 2 }}>
            <div>
              <div className="portTitle">
                <FormattedMessage id="marketing" />
              </div>
              <ul>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Анализ ресурса на соответствие требованиям, предъявляемым поисковыми системами для осуществления последующего поискового продвижения, а также оценка его удобства его использования и привлекательности для пользователей." : "Analysis of the resource for compliance with the requirements of search engines for subsequent search promotion, as well as an assessment of its ease of use and attractiveness to users." }>
                  <FormattedMessage id="audition" />
                </li>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Уточняем цели рекламной кампании, от этого зависит выбор инструментов. Например, если продукт новый, то лучше использовать медийную рекламу." : "We specify the goals of the advertising campaign, the choice of tools depends on this. For example, if the product is new, then it is better to use display advertising." }>
                  <FormattedMessage id="advertisement" />
                </li>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Исследование в ходе которого возникает понимание, необходимое для успешной оптимизации маркетинговых процессов и извлечения максимальной выгоды от рекламной кампании и продвижения в целом." : "The study, during which there is an understanding necessary for the successful optimization of marketing processes and extracting the maximum benefit from the advertising campaign and promotion in general." }>
                  <FormattedMessage id="goal" />
                </li>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Анализ алгоритмов ранжирования поисковых систем, для выявления ключевых факторов ранжирования, отслеживание нововведений поисковиков." : "Analysis of search engine ranking algorithms to identify key ranking factors, tracking search engine innovations." }>
                  <FormattedMessage id="seo" />
                </li>
                <li data-tooltip={ currentLocale === "ru-RU" ? "Использование социальных платформ в качестве каналов для продвижения бренда" : "Using social platforms as channels for brand promotion." }>
                  SMM
                </li>
              </ul>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
