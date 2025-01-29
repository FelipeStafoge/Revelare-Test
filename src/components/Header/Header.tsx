import { HeaderContainer, Icon, Input, InputWithMenu } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Icon
        alt="LOGO"
        $sizeWidth="50"
        $sizeHeight="50"
        src="src/assets/logo.png"
      />
      <InputWithMenu>
        <Input type="text" placeholder="Search" />
        <Icon
          alt="MENU"
          src="src/assets/menu.png"
          $sizeWidth="15"
          $sizeHeight="15"
        />
      </InputWithMenu>
    </HeaderContainer>
  );
};
