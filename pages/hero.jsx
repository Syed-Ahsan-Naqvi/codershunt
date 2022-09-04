import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const options = [
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

export default function Hero() {
  const [first, setfirst] = React.useState(null);
  const open = Boolean(first);
  const handleClick = (event) => {
    setfirst(event.currentTarget);
  };
  const handleClose = () => {
    setfirst(null);
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={first}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 5,
            width: "20ch",
          },
        }}
      >
        {options.map((items) => (
          <MenuItem
            key={items}
            // selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {items}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
