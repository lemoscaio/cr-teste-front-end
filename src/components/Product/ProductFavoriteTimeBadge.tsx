import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";
import { TFavorite } from "../../types";
import { FavoriteTimeBadge } from "./styles";

export function ProductFavoriteTimeBadge({
  isFavorite,
  favoritedAt,
}: {
  isFavorite: TFavorite["isFavorite"];
  favoritedAt: TFavorite["favoritedAt"];
}) {
  return (
    <FavoriteTimeBadge>
      {isFavorite ? "Favoritado" : "Desfavoritado"} {formatRelative(favoritedAt, new Date(), { locale: ptBR })}
    </FavoriteTimeBadge>
  );
}
