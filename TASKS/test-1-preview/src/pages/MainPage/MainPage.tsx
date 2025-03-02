import { FC } from "react";
import styled from "styled-components";
import Button from "../../components/ui/Button";

import ErrorComponent from "../../components/ui/ErrorComponent";
import List from "../../components/MatchesList";
import { useQuery } from "react-query";

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Header = styled.h1`
  color: white;
  font-family: "Tactic Sans", sans-serif;
  font-style: italic;
  font-weight: 900;
  margin: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 56px;
  flex-grow: 0.25;
`;

const LoadingComponent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: white;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const MainPage: FC = () => {
  const { isLoading, error, data, refetch } = useQuery(
    "getMatcheList",
    async () => {
      const response = await fetch(
        "https://app.ftoyd.com/fronttemp-service/fronttemp"
      );

      return response?.json();
    },
    { retry: false, refetchOnWindowFocus: false }
  );

  return (
    <>
      <HeaderLayout>
        <Header>Match Tracker</Header>
        <HeaderContainer>
          {!!error && (
            <ErrorComponent text={"Ошибка: не удалось загрузить информацию"} />
          )}
          <Button
            onClick={refetch}
            text="Обновить"
            disabled={isLoading}
          ></Button>
        </HeaderContainer>
      </HeaderLayout>
      {!error &&
        (!isLoading ? (
          <List items={data?.data?.matches} />
        ) : (
          <LoadingComponent>Данные загружается ...</LoadingComponent>
        ))}
    </>
  );
};

export default MainPage;
