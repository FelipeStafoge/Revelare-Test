import { ContainerTwoImgsAndText } from "./components/ContainerTwoImgsAndText/ContainerTwoImgsAndText";
import { ContainerTextAndImg } from "./components/ContainerTextAndImg/ContainerTextAndImg";
import { Header } from "./components/Header/Header";

function App() {
  const hasTopLine = true;
  const hasSeeMoreButton = true;

  return (
    <>
      <Header />
      <ContainerTextAndImg
        textContainerProps={{
          title: { text: "Starbucks  Happy Hour" },
          subTitle: {
            text: "Encontraremos você em sua caixa de entrada. Ofertas de bebidas estão a caminho",
          },
        }}
        background="src/assets/backgrounds/bg.jpg"
        hasToRenderCups
        allCups={[
          "src/assets/cups/c1.jpg",
          "src/assets/cups/c2.jpg",
          "src/assets/cups/c3.jpg",
        ]}
        backgroundColor="249, 249, 251"
      />

      <ContainerTwoImgsAndText
        textContainerProps={{
          title: { text: "Quatro Bebidas, Um Milhão de Razões" },
          subTitle: {
            text: "Lady Gaga e a starbucks compartilham uma missão: construir um mundo mais amável e corajoso. Por meio da Fundação Born This Way, Lady Gaga inspirou seus fãs a abraçarem a bondade em suas comunidades - online e no mundo todo. Com a sua ajuda, podemos capacitar os jovens a espalhar mais gentileza.",
          },
          hasTopLine,
          hasSeeMoreButton,
        }}
        biggerImg="src/assets/photos/f1.jpg"
        lowerImg="src/assets/photos/f2.jpg"
      />
      <ContainerTwoImgsAndText
        textContainerProps={{
          title: {
            text: "Apresentando Vanilla Sweet Cream Cold Brew - Doce, Cremoso, Frio, Ousado",
          },
          subTitle: {
            text: "Pouco antes de servir, nosso café starbucks cold brew de mistura lenta e personalizada é coberto com um delicado creme de baunilha doce feito em casa que se espalha por toda a xícara",
          },
          hasTopLine,
          hasSeeMoreButton,
        }}
        biggerImg="src/assets/photos/f3.jpg"
        lowerImg="src/assets/photos/f4.jpg"
        reverseRow
      />
      <ContainerTwoImgsAndText
        textContainerProps={{
          title: {
            text: "Apresentando Vanilla Sweet Cream Cold Brew - Doce, Cremoso, Frio, Ousado",
          },
          subTitle: {
            text: "Pouco antes de servir, nosso café starbucks cold brew de mistura lenta e personalizada é coberto com um delicado creme de baunilha doce feito em casa que se espalha por toda a xícara",
          },
          hasTopLine,
          hasSeeMoreButton,
        }}
        biggerImg="src/assets/photos/f5.jpg"
        lowerImg="src/assets/backgrounds/bg2.jpg"
      />
      <ContainerTextAndImg
        textContainerProps={{
          title: { text: "A bondade começa com uma xícara" },
          subTitle: {
            text: "Apresentando a coleção Cups of Kindness: quatro drinks muito especiais tão deliciosos e refrescantes quanto lindos. Duas novas criações, Match Lemonade e Violet Drink, irão se juntar a Pink Drink e Ombré Pink Drink como favoritos instantâneos do verão.",
          },
          hasTopLine,
          hasSeeMoreButton,
        }}
        backgroundColor="231, 233, 237"
        background="src/assets/backgrounds/bg3.jpg"
      />
    </>
  );
}

export default App;
