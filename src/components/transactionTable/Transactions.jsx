import { useMemo, useState } from "react";
import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel, getPaginationRowModel } from "@tanstack/react-table";
import myData from "../../assets/transactions.json";

const Transactions = () => {
  const data = useMemo(() => myData, []);
  const [filtering, setFiltering] = useState("");
  const columns = [
    {
      accessorKey: "TransactionID",
      header: "TransactionID",
    },
    {
      accessorKey: "Date",
      header: "Date",
    },
    {
      accessorKey: "Amount",
      header: "Amount",
    },
    {
      accessorKey: "Status",
      header: "Status",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      <table className="m-full mx-auto border-collapse border border-slate-400 w-full text-left " cellPadding="10">
        <thead className="text-xs text-gray-700  bg-gray-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border border-gray-400">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border border-gray-400 p-2" onClick={header.column.getToggleSortingHandler()}>
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border border-gray-400">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-400 p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4 px-4">
        <div className="text-sm text-gray-500">
          Showing {table.getRowModel().rows.length} of {data.length} transactions
        </div>
        <div className="flex gap-2">
          <div className="flex items-center mt-4 space-x-1">
            {/* <button className="px-5 py-1.5 rounded-sm  cursor-pointer text-sm" onClick={() => table.setPageIndex(0)}>
              First Page
            </button> */}
            <button className="px-5 py-1.5 rounded-sm  cursor-pointer text-sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              Previous Page
            </button>
          </div>
          <div className="flex  items-center mt-4 space-x-1">
            <button className="px-5 py-1.5 rounded-sm  cursor-pointer text-sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Next Page
            </button>
            {/* <button className="px-5 py-1.5 rounded-sm  cursor-pointer text-sm" onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
              Last Page
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
