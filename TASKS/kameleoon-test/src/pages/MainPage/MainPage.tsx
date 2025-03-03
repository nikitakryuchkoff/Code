import { FC, useEffect, useState } from "react";
import InputControl from "../../components/ui/InputControl";
import Table from "../../components/ui/Table";
import { TABLE_COLUMNS } from "../../constants";
import { useFetch } from "../../hooks";
import { Site, Test } from "../../types";
const STATUS_ORDER = ["ONLINE", "PAUSED", "STOPPED", "DRAFT"];

const MainPage: FC = () => {
  const { data, isLoading, error } = useFetch<Test[]>(
    "http://localhost:3100/tests"
  );

  const { data: sites, isLoading: isSitesLoading } = useFetch<Site[]>(
    "http://localhost:3100/sites"
  );

  const [keyword, setKeyword] = useState("");
  const [filteredData, setFilteredData] = useState<Test[]>([]);

  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  useEffect(() => {
    if (data && sites) {
      setFilteredData((prev) =>
        prev.map((test) => {
          const site = sites.find((site) => site?.id === Number(test?.siteId));
          return {
            ...test,
            siteId: site?.url,
          };
        })
      );
    }
  }, [data, sites]);

  useEffect(() => {
    const lowerKeyword = keyword.toLowerCase();

    if (!data) return;

    if (!lowerKeyword.length) {
      setFilteredData(data);
      return;
    }

    const filteredItems = data?.filter(({ name, type, status }) =>
      [name, type, status].some((field) =>
        field?.toLowerCase()?.includes(lowerKeyword)
      )
    );

    setFilteredData(filteredItems);
  }, [data, keyword]);

  const sortData = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    
    setSortConfig({ key, direction });

    setFilteredData((prev) =>
      [...prev].sort((a, b) => {
        if (key === "status") {
          const indexA = STATUS_ORDER.indexOf(a.status);
          const indexB = STATUS_ORDER.indexOf(b.status);
          return direction === "asc" ? indexA - indexB : indexB - indexA;
        } else {
          const fieldA = a[key as keyof Test];
          const fieldB = b[key as keyof Test];

          if (typeof fieldA === "string" && typeof fieldB === "string") {
            if (fieldA.toLowerCase() < fieldB.toLowerCase())
              return direction === "asc" ? -1 : 1;
            if (fieldA.toLowerCase() > fieldB.toLowerCase())
              return direction === "asc" ? 1 : -1;
          }
          return 0;
        }
      })
    );
  };

  if (isLoading || isSitesLoading) return <div>Идет загрузка ....</div>;
  if (error) return <div>Ошибка</div>;

  return (
    <>
      <h1 className="main-page_header">Dashboard</h1>
      <InputControl testCount={filteredData?.length} onChange={setKeyword} />
      <Table
        columns={TABLE_COLUMNS}
        onColumnClick={sortData}
        dataSource={filteredData}
      />
    </>
  );
};

export default MainPage;
