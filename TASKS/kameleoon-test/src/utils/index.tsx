import { Status } from "../types";

export const getColorByStatus = (status: Status) => {
  switch (status) {
    case Status.DRAFT:
      return "grey";
    case Status.STOPPED:
      return "red";
    case Status.ONLINE:
      return "green";
    case Status.PAUSED:
      return "orange";
  }
};
