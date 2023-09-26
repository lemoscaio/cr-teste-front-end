import { Star, StarBorder } from "@mui/icons-material";
import { IconWrapper } from "./styles";

export function ProductFavoriteIcon({
  isFavorite,
  onClickFavorite,
}: {
  isFavorite?: boolean;
  onClickFavorite: () => void;
}) {
  return (
    <IconWrapper onClick={() => onClickFavorite()}>
      {!isFavorite ? <StarBorder /> : <Star sx={{ color: "#FFC000" }} />}
    </IconWrapper>
  );
}
