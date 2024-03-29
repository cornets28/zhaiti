import type { FC } from "react";
import Page from "../../../components/Page/Page";
import colors from "../../../utils/theme/base/colors";
import SportsList from "../components/SportsContainer";

export const Sports: FC = () => {
  const { white2 } = colors;
  return (
    <Page pageColor={white2.main}>
      <SportsList />
    </Page>
  );
};

export default Sports;
