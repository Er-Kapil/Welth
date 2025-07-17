"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@radix-ui/react-checkbox";
import { format } from "date-fns";
import { categoryColors } from "../../../../../data/categories";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Clock, MoreHorizontal, RefreshCw } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const RECURRING_INTERVALS = {
  DAILY: "Daily",
  WEEKLY: "Weekly",
  MONTHLY: "Monthly",
  YEARLY: "Yearly",
};

const TransactionsTable = ({ transactions }) => {
  
  const router = useRouter()
  const filteredAndSortedTransactions = transactions;
  const handleSort = () => {};

  return (
    <div className="">
      {/* filters */}
      {/* Transactions */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center">Date</div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("category")}
              >
                <div className="flex items-center">Category</div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("amount")}
              >
                <div className="flex items-center">Amount</div>
              </TableHead>
              <TableHead>Recurring</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedTransactions.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className={"text-center text-muted-foreground"}
                >
                  No Transactions Found
                </TableCell>
              </TableRow>
            ) : (
              filteredAndSortedTransactions.map((trans) => (
                <TableRow key={trans.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{format(new Date(trans.date), "PP")}</TableCell>
                  <TableCell>{trans.description}</TableCell>
                  <TableCell className={"capitalize "}>
                    <span
                      style={{ background: categoryColors[trans.category] }}
                      className="px-2 py-1 rounded text-white text-sm"
                    >
                      {trans.category}
                    </span>
                  </TableCell>
                  <TableCell
                    className="text-right font-medium"
                    style={{
                      color: trans.type === "EXPENSE" ? "red" : "green",
                    }}
                  >
                    {trans.type === "EXPENSE" ? "-" : "+"}₹{trans.amount}
                  </TableCell>
                  <TableCell>
                    {trans.isRecurring ? (
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge
                            variant={"outline"}
                            className={
                              "gap-1 bg-purple-100 text-purple-700 hover:bg-purple-200"
                            }
                          >
                            <RefreshCw className="h-3 w-3" />
                            {RECURRING_INTERVALS[trans.recurringInterval]}{" "}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="text-sm">
                            <div className="font-medium">Next Date:</div>
                            <div>
                              {format(new Date(trans.nextRecurringDate), "PP")}
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Badge variant={"outline"} className={"gap-1"}>
                        <Clock className="h-3 w-3" /> One time
                      </Badge>
                    )}
                  </TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className='h-8 w-8 p-0'><MoreHorizontal className="h-4 w-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel
                        onClick={()=>router.push(`/transaction/create?edit=${trans.id}`)}
                        >Edit</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className={'text-destructive'} /*</DropdownMenuContent>onClick={()=>deleteFn([trans.id])}*/>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionsTable;
