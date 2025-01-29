import { useMemo, useState } from "react";
import { DivArrows, ContainerArrow, StyledArrow } from "./styles";
import { useGetgetAllRecipes } from "../../query/GetRecipes/GetRecipes";
import { FeedBlog } from "../../components/FeedBlog/FeedBlog";
import { Header } from "../../components/Header/Header";

export const Blog = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const { data } = useGetgetAllRecipes();
  const itemsPerPage = 3;

  const usedData = useMemo(() => {
    if (search !== "") {
      return data
        .filter((element: any) =>
          element.receita.toLowerCase().includes(search.toLowerCase())
        )
        .slice(page, page + itemsPerPage);
    }
    return data?.slice(page, page + itemsPerPage);
  }, [data, page, search]);

  const canGoNext = page + itemsPerPage < (usedData?.length || 0);
  const canGoPrev = page > 0;

  const changePage = (direction: string) => {
    if (direction === "next" && canGoNext) {
      setPage((prevPage) => prevPage + itemsPerPage);
    } else if (direction === "prev" && canGoPrev) {
      setPage((prevPage) => prevPage - itemsPerPage);
    }
  };

  return (
    <>
      <Header search={search} setSearch={setSearch} isBlog />
      <DivArrows>
        <ContainerArrow>
          {canGoPrev && (
            <StyledArrow
              id="prev"
              src="src/assets/arrow-left.svg"
              onClick={() => changePage("prev")}
            />
          )}
        </ContainerArrow>
        <ContainerArrow>
          {canGoNext && (
            <StyledArrow
              id="next"
              src="src/assets/arrow-right.svg"
              onClick={() => changePage("next")}
            />
          )}
        </ContainerArrow>
      </DivArrows>

      <FeedBlog usedData={usedData} />
    </>
  );
};

export default Blog;
