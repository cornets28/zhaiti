import type { FC } from "react";
import Container from "@mui/material/Container";
import Title from "../../../../components/Title/Title";
import Cow from "../../../../images/boys.webp";
import ArticleCard from "../../../../components/ArticleCard/ArticleCard";
import { Grid } from "../../../../components/Grid/Grid";
import { useTranslation } from "react-i18next";
import LastestArticlesContainer from "./LastestArticlesContainer/LastestArticlesContainer";
import LastestArticlesWrapper from "./LastestArticlesWrapper/LastestArticlesWrapper";

const temporaryArticles = [
  {
    id: 1,
    title: "The Buy By the Sea",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Sam Puffy Bark",
    date: "Jully 5, 2023",
    photo: Cow,
    reply: 4,
    like: 0,
    channel: "Politik",
  },
  {
    id: 2,
    title: "Bella Chaow Chaow Chaow",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "john Woofr",
    date: "Jun 12, 2023",
    photo: Cow,
    reply: 0,
    like: 19,
    channel: "Edikasyon",
  },
  {
    id: 3,
    title: "Soldiers are fitghers",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Bob Dun",
    date: "Jan 5, 20203",
    photo: Cow,
    reply: 44,
    like: 23,
    channel: "Relijyon",
  },
  {
    id: 4,
    title: "Check who wants me tonight in the hood",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Bad Bad Girl",
    date: "Dec 5, 2023",
    photo: Cow,
    reply: 0,
    like: 0,
    channel: "Kilti",
  },
  {
    id: 5,
    title: "Should we ascape death?",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Foolsih Woman",
    date: "Jun 5, 2020",
    photo: Cow,
    reply: 23,
    like: 1,
    channel: "Edikasyon",
  },
  {
    id: 6,
    title: "The doll in the pool",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "john Woofr",
    date: "Jun 5, 2020",
    photo: Cow,
    reply: 4,
    like: 0,
    channel: "Espò",
  },
  {
    id: 7,
    title: "What to eat on Wenesday",
    body: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    writer: "Crap BooBoo",
    date: "April 5, 2020",
    photo: Cow,
    reply: 0,
    like: 0,
    channel: "Politik",
  },
];

const LatestArticles: FC = () => {
  const { t } = useTranslation();

  return (
    <LastestArticlesContainer>
      <Container>
        <Grid container item py={6}>
          <Title
            text="We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence."
            title1="Denye"
            title2="Atik yo"
          />
        </Grid>

        <Grid container mb={15}>
          {temporaryArticles.length > 0 &&
            temporaryArticles.slice(0, 3).map((article, index) => (
              <LastestArticlesWrapper key={index}>
                <ArticleCard
                  title={article.title}
                  channel={t(article.channel)}
                  writer={article.writer}
                  body={article.body}
                  reply={article.reply}
                  like={article.like}
                  image={article.photo}
                  tooltipTitle="Modifye nouvèl sa"
                  url={`/atik-yo/${article.id}`}
                />
              </LastestArticlesWrapper>
            ))}
        </Grid>
      </Container>
    </LastestArticlesContainer>
  );
};

export default LatestArticles;