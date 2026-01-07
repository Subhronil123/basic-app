import { useMemo, useState } from "react";
 
export default function DataTable({ data }) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [direction, setDirection] = useState("asc");
  const [page, setPage] = useState(1);
 
  const pageSize = 4;
 
  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [data, search]);
 
  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;
 
    return [...filteredData].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return direction === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortKey, direction]);
 
  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, page]);
 
  const handleSort = (key) => {
    if (sortKey === key) {
      setDirection(direction === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  };
 
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow space-y-4">
      {/* Search */}
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-64 p-2 rounded-lg bg-slate-100 dark:bg-slate-700"
      />
 
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-300 dark:border-slate-700">
              {["name", "email", "users", "revenue"].map((key) => (
                <th
                  key={key}
                  onClick={() => handleSort(key)}
                  className="text-left py-2 cursor-pointer"
                >
                  {key.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
 
          <tbody>
            {paginatedData.map((row) => (
              <tr
                key={row.id}
                className="border-b border-slate-200 dark:border-slate-700"
              >
                <td className="py-2">{row.name}</td>
                <td className="py-2">{row.email}</td>
                <td className="py-2">{row.users}</td>
                <td className="py-2">${row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 
      {/* Pagination */}
      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-500">
          Page {page} of {Math.ceil(sortedData.length / pageSize)}
        </span>
 
        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            disabled={page >= sortedData.length / pageSize}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}