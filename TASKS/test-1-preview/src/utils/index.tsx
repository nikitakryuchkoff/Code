export const getStatusLabel = (status: string): string => {
  const labelsMap = new Map([
    ["Finished", "Finished"],
    ["Scheduled", "Match preparing"],
    ["Ongoing", "Live"],
  ]);

  return labelsMap.get(status) || "";
};
