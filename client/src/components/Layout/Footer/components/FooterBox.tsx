import { FC } from "react";
import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import { Typography } from "../../../Typography/Typography";
import colors from "../../../../utils/theme/base/colors";
import typography from "../../../../utils/theme/base/typography";
import { FooterBoxType } from "../../../../types/FooterBoxType";

const { orange } = colors;
const { h5} = typography;

const FooterBox: FC<FooterBoxType> = ({ header, children }) => (
    <Box sx={{textAlign: {xs: 'center', sm: "left"}}}>
    <Typography
      sx={{
        fontSize: h5,
        color: orange.main,
        marginTop: {xs: 3, sm: 0}
      }}
      gutterBottom
    >
      {header}
    </Typography>
      {children}
  </Box>
);

FooterBox.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FooterBox;
