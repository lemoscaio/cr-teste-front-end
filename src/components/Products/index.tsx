import { useState } from "react";
import { useGetProducts } from "../../lib/reactQuery/useProducts";
import { TFavoritesHashMap, TProduct } from "../../types";
import { Product } from "../Product";
import { ProductsContainer } from "./styles";

export function Products() {
  const [favorites, setFavorites] = useState<TFavoritesHashMap>({});

  const productsQuery = useGetProducts();
  const products = productsQuery.data ?? [];

  function handleClickFavorite(productId: TProduct["id"]) {
    setFavorites((prevFavorites) => {
      const prevFavorite = prevFavorites[productId];

      const newIsFavorite = !prevFavorite?.isFavorite;

      return {
        ...prevFavorites,
        [productId]: {
          isFavorite: newIsFavorite,
          updatedAt: new Date(),
          favoritedAt: new Date(),
        },
      };
    });
  }

  return (
    <ProductsContainer>
      {!productsQuery.isSuccess && <div>Carregando...</div>}
      {products.map((product) => {
        const productFavorite = favorites[product.id];

        return (
          <Product.Root
            key={product.id}
            isFavorite={productFavorite?.isFavorite}
          >
            {productFavorite?.updatedAt && <Product.UpdatedAtBadge updatedAt={productFavorite.updatedAt} />}
            <Product.FavoriteIcon
              isFavorite={productFavorite?.isFavorite}
              onClickFavorite={() => handleClickFavorite(product.id)}
            />
            <Product.Image image={product.imageUrl} />
            <Product.Content
              title={product.title}
              description={product.description}
              price={product.price}
            />
            {productFavorite && (
              <Product.FavoriteTimeBadge
                isFavorite={productFavorite.isFavorite}
                favoritedAt={productFavorite.favoritedAt}
              />
            )}
          </Product.Root>
        );
      })}
    </ProductsContainer>
  );
}
