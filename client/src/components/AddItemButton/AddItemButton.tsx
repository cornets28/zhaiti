import { FC } from "react";
import PropTypes from "prop-types";
import { Box } from "../Box/Box";
import colors from "../../utils/theme/base/colors";
import { AddSvgIcon } from "../../images/svg/AddSvgIcon";
import { AddItemButtonType } from "../../types/AddItemButtonType";

const AddItemButton: FC<AddItemButtonType> = ({ onClick }) => {
  const { grey, error } = colors;
  return (
    <Box
      height={50}
      width={50}
      color={error.focus}
      sx={{
        right: 0,
        position: "absolute",
        mt: 2,
        mr: { xs: 1, sm: 1, md: 5, lg: 6 },
        borderRadius: 50,
        "&:hover": {
          elevation: 5,
          cursor: "pointer",
          color: grey[700],
        },
      }}
      onClick={onClick}
    >
      <AddSvgIcon />
    </Box>
  );
};

AddItemButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddItemButton;
