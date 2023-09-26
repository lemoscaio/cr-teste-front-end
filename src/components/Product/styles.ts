import { styled, Card, CardMedia, CardContent, Typography } from "@mui/material";

export const Product = styled(Card)({
  width: "240px",
  position: "relative",

  borderRadius: "10px",

  border: "solid transparent",
  borderWidth: "4px",
});

export const UpdatedAtBadge = styled("div")({
  position: "absolute",
  top: "0",
  left: "0",
  padding: "10px",
  cursor: "pointer",

  display: "grid",
  placeContent: "center",

  backgroundColor: "rgba(255, 255, 255, 0.8)",

  borderRadius: "0 0 10px 0",

  fontSize: "0.8rem",
});

export const IconWrapper = styled("div")({
  position: "absolute",
  top: "0",
  right: "0",
  padding: "8px",
  cursor: "pointer",

  display: "grid",
  placeContent: "center",

  backgroundColor: "rgba(255, 255, 255, 0.9)",

  borderRadius: "0 0 0 10px",
});

export const Image = styled(CardMedia)({
  height: "140px",
  backgroundSize: "contain",

  marginTop: "8px",
});

export const Content = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const ProductName = styled(Typography)({
  fontWeight: "bold",
  marginTop: "8px",
});

export const ProductDescription = styled(Typography)({
  fontSize: "0.8rem",
  marginTop: "8px",
  marginBottom: "32px",
});

export const ProductPrice = styled(Typography)({
  position: "absolute",
  bottom: "24px",
  left: "50%",
  transform: "translateX(-50%)",

  fontWeight: "bold",
});

export const FavoriteTimeBadge = styled("div")({
  position: "absolute",
  bottom: "0",
  right: "0",
  padding: "2px 10px",

  display: "grid",
  placeContent: "center",

  fontSize: "0.8rem",

  borderRadius: "6px 0 0 0",
});
