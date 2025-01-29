import { useMemo, useState } from "react";
import { DivArrows, ContainerArrow, StyledArrow } from "./styles";
import { useGetgetAllRecipes } from "../../query/GetRecipes/GetRecipes";
import { FeedBlog } from "../../components/FeedBlog/FeedBlog";
import { Header } from "../../components/Header/Header";

export const Blog = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const { data } = useGetgetAllRecipes();

  const usedData = useMemo(() => {
    if (search !== "") {
      return data.filter((element: any) =>
        element.receita.toLowerCase().includes(search.toLowerCase())
      );
    }
    const start = page * 3;
    const end = start + 3;
    return data?.slice(start, end);
  }, [data, search, page]);

  const switchPage = (param: string) => {
    setPage((prevPage) => {
      if (param === "next") return Math.min(prevPage + 1, 2);
      return Math.max(prevPage - 1, 0);
    });
  };

  return (
    <>
      <Header search={search} setSearch={setSearch} isBlog />
      <DivArrows>
        <ContainerArrow>
          {page > 0 && (
            <StyledArrow
              id="prev"
              src="src/assets/arrow-left.svg"
              onClick={() => switchPage("prev")}
            />
          )}
        </ContainerArrow>
        <ContainerArrow>
          {page < 2 && (
            <StyledArrow
              id="next"
              src="src/assets/arrow-right.svg"
              onClick={() => switchPage("next")}
            />
          )}
        </ContainerArrow>
      </DivArrows>

      <FeedBlog usedData={usedData} />
    </>
  );
};

export default Blog;
