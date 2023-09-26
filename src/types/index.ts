export type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};

export type TFavoritesHashMap = {
  [key: TProduct["id"]]: TFavorite | undefined;
};

export type TFavorite = {
  isFavorite: boolean;
  favoritedAt: Date;
  updatedAt: Date;
};
