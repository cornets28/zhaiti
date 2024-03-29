import { FC, useEffect, useState } from "react";
import { Grid } from "../../../components/Grid/Grid";
import { Box } from "../../../components/Box/Box";
import colors from "../../../utils/theme/base/colors";
import typography from "../../../utils/theme/base/typography";
import MostPopularItem from "../../../components/MostPopularItems/MostPopularItem/MostPopularItem";
import { useTranslation } from "react-i18next";
import Pub from "../../../components/Pub/Pub";
import LightTooltip from "../../../components/Tooltip/Tooltip";
import { ShareSvgIcon } from "../../../images/svg/ShareSvgIcon";
import Cow from "../../../images/JamieFox.webp";
import { useParams } from "react-router-dom";
import SpanHeader from "./SpanHeader/SpanHeader";
import ArticleTitle from "./ArticleTitle/ArticleTitle";
import PublishDate from "./PublishDate/PublishDate";
import ArticleBody from "./ArticleBody/ArticleBody";
import SingleArticleWrapper from "./SingleArticleWrapper/SingleArticleWrapper";
import LeftSection from "../../../components/LeftSection/LeftSection";
import RightSection from "../../../components/RightSection/RightSection";
import RightSectionContainer from "./RightSectionContainer/RightSectionContainer";
import MostReadHeader from "../../../components/MostPopularItems/MostReadHeader/MostReadHeader";
import MostReadBody from "../../../components/MostReadBody/MostReadBody";
import SingleArticleImage from "./SingleArticleImage/SingleArticleImage";
import Page from "../../../components/Page/Page";
import db from "../../../utils/articles.json";
import InviteToAction from "../../../components/InviteToAction/InviteToAction";
import UserPhoto from "../../../images/user5.avif"
import Author from "../../../components/Author/Author";

const SingleArticle: FC = () => {
  const { blue, grey, white2 } = colors;
  const { h5 } = typography;
  const { t } = useTranslation();
  const { id } = useParams();
  const [temporaryArticles, setTemporaryArticles] = useState([]);
  const [singleArticle, setSingleArticle] = useState<any>({});

  const publishDate = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  useEffect(() => {
    // @ts-ignore
    setTemporaryArticles(db.articles);
    // @ts-ignore
    const tempSingleArticle = temporaryArticles.find(
      // @ts-ignore
      (article) => article.id === parseInt(id)
    );
    setSingleArticle(tempSingleArticle);
  }, [temporaryArticles]);

  console.log("TEST: ", singleArticle?.user?.occupation[0]);

  return (
    <Page pageColor={white2.main}>
      <SingleArticleWrapper key={id}>
        <LeftSection>
          <RightSectionContainer>
            <ArticleTitle title={singleArticle?.title} />
            <Grid item xs={12} sm={12} md={18} lg={12}>
              <SpanHeader
                textTransform="uppercase"
                fontSize={h5}
                color={blue.main}
                title={singleArticle?.categories}
                mb={-4}
              />
            </Grid>
            <Grid container textAlign="left">
              <Grid item xs={2} sm={2} md={2} lg={2} pt={2.5}>
                <LightTooltip title={t("Pataje atik sa")} placement="right-end">
                  <Box width={25} height={1} sx={{ cursor: "pointer" }}>
                    <ShareSvgIcon />
                  </Box>
                </LightTooltip>
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <PublishDate date={publishDate} />
              </Grid>
            </Grid>

            <SingleArticleImage image={Cow} />
            <SpanHeader
              textTransform="capitalize"
              fontSize="11px"
              color={blue.main}
              textColor={grey["600"]}
              title={singleArticle?.subtitle}
            />
            <InviteToAction
              numberOfMessages={"1.6k"}
              onClickShare={() => alert("share")}
              onClickSave={() => alert("save")}
              onClickMessages={() => alert("message")}
            />
            <Author authorImage={UserPhoto} alt={singleArticle?.user?.first_name} fullName={singleArticle?.user?.first_name + " " + singleArticle?.user?.last_name} profession={`${t(singleArticle?.user?.occupation[0])}`}/>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <ArticleBody>{singleArticle?.description}</ArticleBody>
            </Grid>
            <InviteToAction
              numberOfMessages={"1.6k"}
              onClickShare={() => alert("share")}
              onClickSave={() => alert("save")}
              onClickMessages={() => alert("message")}
            />
          </RightSectionContainer>
        </LeftSection>

        <RightSection>
          <MostReadHeader>{t("Atik Ki Pi Popilè Yo")}</MostReadHeader>
          <MostReadBody>
            {temporaryArticles &&
              temporaryArticles.map((article) => (
                <MostPopularItem
                  image={Cow}
                  // @ts-ignore
                  title={article.title}
                  // @ts-ignore
                  views={article.views}
                  onClick={() => alert("Coming soon")}
                  // @ts-ignore
                  key={article.id}
                />
              ))}
          </MostReadBody>
          <Pub />
        </RightSection>
      </SingleArticleWrapper>
    </Page>
  );
};

export default SingleArticle;
