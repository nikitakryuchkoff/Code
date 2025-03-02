export type TStatus = "Finished" | "Scheduled" | "Ongoing";

export type TMatchPlayer = {
  kills: number;
  userName: string;
};

export type TMatchTeam = {
  name: string;
  place: number;
  players: TMatchPlayer[];
  TMatchPlayer: number;
  total_kills: number;
};

export type TMatchItem = {
  awayScore: number;
  homeScore: number;
  status: TStatus;
  time: typeof Date;
  title: string;
  awayTeam: TMatchTeam;
  homeTeam: TMatchTeam;
};
