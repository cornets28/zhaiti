import { useEffect, type FC, useState } from "react";
import { useTranslation } from "react-i18next";
import Pub from "../../../components/Pub/Pub";
import Page from "../../../components/Page/Page";
import ArticlesWrapper from "../../../components/ArticlesWrapper/ArticlesWrapper";
import LeftSection from "../../../components/LeftSection/LeftSection";
import RightSection from "../../../components/RightSection/RightSection";
import { CultureSection } from "./CultureSection/CultureSection";
import { EducationSection } from "./EducationSection/EducationSection";
import { MustKnowHaitiansSection } from "./MustKnowHaitiansSection/MustKnowHaitiansSection";
import colors from "../../../utils/theme/base/colors";
import db from "../../../utils/articles.json";
import SportsSection from "./SportsSection";
import TopHighLevelNews from "./TopHihgLevelNews";
import MostRecentArticles from "../../../components/MostRecentArticles/MostRecentArticles";
import MostPopularItems from "../../../components/MostPopularItems/MostPopularItems";

const NewsList: FC = () => {
  const { t } = useTranslation();
  const { white2 } = colors;
  const [temporaryArticles, setTemporaryArticles] = useState<any>([]);
  const [temporaryImpHaitians, setTemporaryImpHaitians] = useState<any>([]);

  useEffect(() => {
    // @ts-ignore
    setTemporaryArticles(db.articles);

    // @ts-ignore
    setTemporaryImpHaitians(db.importantHaitians);
  }, [temporaryArticles, temporaryImpHaitians]);

  // @ts-ignore
  const topTemporaryArticles = temporaryArticles.slice(0, 6);
  // @ts-ignore
  const culturalNews = temporaryArticles.filter((article) =>
    article.categories.includes("Kilti")
  );
  // @ts-ignore
  const educationalNews = temporaryArticles.filter((article) =>
    article.categories.includes("Edikasyon")
  );
  // @ts-ignore
  const sportsNews = temporaryArticles.filter((article) =>
    article.categories.includes("Espò")
  );

  return (
    <Page pageColor={white2.main}>
      <ArticlesWrapper>
        <TopHighLevelNews topLevelNews={temporaryArticles} />
        <LeftSection>
          <MostRecentArticles
            header={t("Atik yo")}
            temporaryArticles={topTemporaryArticles}
          />
          <SportsSection header={t("Espò")} sportsNews={sportsNews} />
          <CultureSection header={t("Kilti")} culturalNews={culturalNews} />
          <EducationSection
            header={t("Edikasyon")}
            educationalNews={educationalNews}
          />
          <MustKnowHaitiansSection
            header={t("Ayisyen ou dwe konnen")}
            importantHaitians={temporaryImpHaitians}
          />
          {/* TODO: Add, religion, spituality, Science, Politics, Heath */}
        </LeftSection>

        <RightSection>
          <MostPopularItems mostPopularArticles={temporaryArticles} />
          <Pub />
        </RightSection>
      </ArticlesWrapper>
    </Page>
  );
};

export default NewsList;
