import { ContainerTwoImgsAndText } from "../ContainerTwoImgsAndText/ContainerTwoImgsAndText";

type FeedBlogProps = {
  search?: string;
  usedData: any;
};

export const FeedBlog = ({ usedData }: FeedBlogProps) => {
  const hasSeeMoreButton = true;
  return (
    <div>
      {usedData?.map((recipe: any, index: number) => {
        return (
          <ContainerTwoImgsAndText
            reverseRow={index % 2 === 1}
            textContainerProps={{
              title: { text: recipe.receita },
              subTitle: { text: recipe.modo_preparo },
              ingredients: recipe.ingredientes,
              hasSeeMoreButton,
            }}
            ingredients={recipe.ingredientes}
            creationDate={recipe.created_at}
            biggerImg={recipe.link_imagem}
          />
        );
      })}
    </div>
  );
};
