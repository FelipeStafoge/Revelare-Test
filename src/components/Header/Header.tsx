import { HeaderContainer, Icon, Input, InputWithMenu } from "./styles";

type HeaderProps = {
  isBlog?: boolean;
  search?: string;
  setSearch?: (param: string) => void;
};

export const Header = ({ search, setSearch, isBlog }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Icon
        alt="LOGO"
        $sizeWidth="50"
        $sizeHeight="50"
        src={isBlog ? "src/assets/bakeryIcon.png" : "src/assets/logo.png"}
      />
      <InputWithMenu>
        {isBlog ? (
          <Input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              if (setSearch) {
                setSearch(e.target.value);
              }
            }}
          />
        ) : (
          <Input type="text" placeholder="Search" />
        )}
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
