import { ContainerTextAndImg } from "../../components/ContainerTextAndImg/ContainerTextAndImg";
import { ContainerTwoImgsAndText } from "../../components/ContainerTwoImgsAndText/ContainerTwoImgsAndText";
import { Header } from "../../components/Header/Header";
import C1 from "../../assets/cups/c1.jpg";
import C2 from "../../assets/cups/c2.jpg";
import C3 from "../../assets/cups/c3.jpg";
import BG from "../../assets/backgrounds/bg.jpg";
import BiggerImage01 from "../../assets/photos/f1.jpg";
import LowerImage01 from "../../assets/photos/f2.jpg";
import BiggerImage02 from "../../assets/photos/f3.jpg";
import LowerImage02 from "../../assets/photos/f4.jpg";
import BiggerImage03 from "../../assets/photos/f5.jpg";
import LowerImage03 from "../../assets/backgrounds/bg2.jpg";
import Background from "../../assets/backgrounds/bg3.jpg";
import { LastBackground } from "../../components/LastBackground/LastBackground";

function Home() {
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
        background={BG}
        hasToRenderCups
        allCups={[C1, C2, C3]}
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
        biggerImg={BiggerImage01}
        lowerImg={LowerImage01}
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
        biggerImg={BiggerImage02}
        lowerImg={LowerImage02}
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
        biggerImg={BiggerImage03}
        lowerImg={LowerImage03}
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
        background={Background}
      />
      <LastBackground />
    </>
  );
}

export default Home;
