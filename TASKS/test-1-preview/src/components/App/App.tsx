import { FC } from "react";
import styled from "styled-components";
import MainPage from "../../pages/MainPage/MainPage";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 106px);
  background: #06080c;
  padding: 53px 42px;
`;

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <MainPage />
      </AppLayout>
    </QueryClientProvider>
  );
};
