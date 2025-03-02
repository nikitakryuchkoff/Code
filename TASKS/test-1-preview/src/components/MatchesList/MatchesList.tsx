import { FC } from "react";
import styled from "styled-components";
import MatchItem from "../MatchItem";
import { TMatchItem } from "../MatchItem/types";

const MatchesListWrapper = styled.ul`
  margi-top: 20px;
  padding: 0px;
`;

type MatchesListProps = {
  items: TMatchItem[];
};

const List: FC<MatchesListProps> = ({ items }) => {
  return (
    <MatchesListWrapper>
      {items?.map((item) => (
        <MatchItem {...item} />
      ))}
    </MatchesListWrapper>
  );
};

export default List;
