import React, { useEffect, useState } from "react";
import { Button, Dropdown, TextInput } from "flowbite-react";
import { IoMdSearch } from "react-icons/io";
import { PiChats } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { TiThSmallOutline } from "react-icons/ti";
import { MdFilterList } from "react-icons/md";
import { FaSortAlphaDown } from "react-icons/fa";
import DashTable from "./DashTable";
import { DashToast } from "./DashToast";

export default function DashProducts() {
  // State to store brand table data
  const [brandTable, setBrandTable] = useState([]);

  // Fetch data from JSON file when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setBrandTable(data.brandTableData);
        //   console.log(data.brandTableData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      id="dashProducts"
      className=" w-full h-[97vh] pt-2 border rounded-xl table-auto overflow-x-scroll md:overflow-x-hidden md:mx-auto scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500"
    >
      {/* Header */}
      <div className="relative w-full flex justify-between flex-wrap items-center border-b pb-2 px-2">
        <span className="text-2xl font-medium">Products</span>
        <span className="flex gap-2">
          {/* Search input */}
          <TextInput
            className="w-[200px]"
            id="search"
            type="text"
            icon={IoMdSearch}
            placeholder="Search for..."
          />
          {/* Buttons */}
          <Button color="gray">
            <PiChats />
          </Button>
          <Button color="gray">
            <CiSettings />
          </Button>
        </span>
      </div>

      {/* Filters and sorting options */}
      <div className="w-full flex justify-between flex-wrap gap-2 md:gap-0 items-center py-2 px-2 border-b">
        <div className=" flex gap-2">
          {/* All brands Dropdowns */}
          <Dropdown
            label={
              <>
                <TiThSmallOutline className="mr-2" />
                All brands
              </>
            }
            color="light"
            className="border rounded-xl"
          >
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          {/* Desk dropdowns */}
          <Dropdown label="Desk" color="light" className="border rounded-xl">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Dropdown label="Tags" color="light" className="border rounded-xl">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          {/* Sort and filter buttons */}
          <Button color="light" className="text-slate-500">
            <FaSortAlphaDown className="mr-2" />
            Sort
          </Button>
          <Button color="light" className="text-slate-500">
            <MdFilterList className="mr-2" />
            Filter
          </Button>
        </div>
        {/* Other buttons */}
        <div className=" flex gap-2">
          <Button color="light">
            <FaSortAlphaDown className="mr-2" />
            Meeting
          </Button>
          <Button color="light">
            <FaSortAlphaDown className="mr-2" />
            Import/ Export
          </Button>
        </div>
      </div>

      {/* Table component */}
      <DashTable brandTable={brandTable} />

      {/* Toast component */}
      <DashToast />
    </div>
  );
}
