import { FC } from "react";
import styled from "styled-components";
import { CommandIcon } from "../ui/Icons";
import { TMatchItem, TStatus } from "./types";
import { getStatusLabel } from "../../utils";

const StatusColors: Record<TStatus, string> = {
  Finished: "#EB0237",
  Ongoing: "#43AD28",
  Scheduled: "#EB6402",
};

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 16px 36px;
  widht: 100%;
  height: 87px;
  background: #0f1318;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #0a0e12;
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const ListItemContainer = styled.div<{ direction?: "row" | "column" }>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: center;
  align-items: center;
  color: white;
  gap: 12px;
`;

const ListItemMatchStatus = styled.div<{ status: TStatus }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 12px;
  background: ${(props) => StatusColors[props?.status]};
  padding: 6px 34px;
  border-radius: 4px;
`;

const MatchItem: FC<TMatchItem> = ({
  awayScore,
  homeScore,
  status,
  awayTeam,
  homeTeam,
}) => {
  return (
    <ListItem>
      <ListItemContainer>
        <CommandIcon />
        <span>{awayTeam.name}</span>
      </ListItemContainer>

      <ListItemContainer direction="column">
        {status !== "Scheduled" && (
          <span>
            {awayScore} : {homeScore}
          </span>
        )}

        <ListItemMatchStatus status={status}>
          {getStatusLabel(status)}
        </ListItemMatchStatus>
      </ListItemContainer>

      <ListItemContainer>
        <span>{homeTeam.name}</span>
        <CommandIcon />
      </ListItemContainer>
    </ListItem>
  );
};

export default MatchItem;
