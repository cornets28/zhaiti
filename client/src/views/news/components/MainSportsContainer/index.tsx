import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../../../../components/Box/Box";
import { MainSportsContainerType } from "../../../../types/MainSportsContainerType";
import { Grid } from "../../../../components/Grid/Grid";
import { Typography } from "../../../../components/Typography/Typography";
import typography from "../../../../utils/theme/base/typography";
import colors from "../../../../utils/theme/base/colors";

export const MainSportsContainer: FC<MainSportsContainerType> = ({
  title,
  mainImage,
  onClick
}) => {
  const { h5 } = typography;
  const { black } = colors;

  return (
    <Grid container item xs={12} sm={12} md={12} lg={12}>
      <Typography
        fontSize={h5}
        color={black.main}
        mt={2}
        textTransform="capitalize"
        component="div"
        sx={{ paddingLeft: { xs: "2%", sm: 3 } }}
      >
        {title}
      </Typography>
      <Box
        component="img"
        sx={{
          height: { xs: "30vh", sm: "45vh", md: "45vh", lg: "42.75vh" },
          width: "100%",
          marginTop: 0.5,
          paddingX: { xs: 3, sm: 3, md: 0, lg: 0 },
          cursor: "pointer"
        }}
        // @ts-ignore
        alt="Main picture"
        src={mainImage}
        onClick={onClick}
      />
    </Grid>
  );
};

MainSportsContainer.propTypes = {
  mainImage: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainSportsContainer;
