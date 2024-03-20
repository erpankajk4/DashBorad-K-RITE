import React, { useState } from "react";
import { Table, Checkbox } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { PiChats } from "react-icons/pi";

export default function DashTable({ brandTable }) {
  // Array of random colors
  const colors = ["red", "amber", "lime", "yellow", "green", "sky"];
  // State to track the "Brand" checkbox status
  const [selectAll, setSelectAll] = useState(false);

  // Function to handle "Brand" checkbox change
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  return (
    <div className="h-[61vh] overflow-y-scroll pr-1 border-b">
      <Table hoverable className="tableSection">
        {/* Sticky Table Header */}
        <Table.Head className="text-gray-500">
          <Table.HeadCell>
            {/* "Select All" checkbox */}
            <Checkbox checked={selectAll} onChange={handleSelectAll} />
          </Table.HeadCell>
          <Table.HeadCell>
            <p className="flex justify-between items-center">
              Brand <FaPlus />
            </p>
          </Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Members</Table.HeadCell>
          <Table.HeadCell>Categories</Table.HeadCell>
          <Table.HeadCell>Tags</Table.HeadCell>
          <Table.HeadCell className="px-3">Next meeting</Table.HeadCell>
          <Table.HeadCell className="p-4 max-w-1">+</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y border-b border-slate-200 font-medium text-gray-900">
          {brandTable.map(
            (
              {
                id,
                brand,
                brandImage,
                commentsCounts,
                description,
                members,
                categories,
                tags,
                nextMeeting,
              },
              index
            ) => {
              // Get random color
              const randomColor = colors[index % colors.length];

              return (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={id}
                >
                  <Table.Cell>
                    {/* Brand checkbox */}
                    <Checkbox checked={selectAll} />
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-between gap-4 items-center whitespace-nowrap dark:text-white">
                      <div className="flex items-center gap-1">
                        <img
                          src={brandImage}
                          className="w-6 h-6 object-cover"
                          alt={brand}
                        />
                        {brand}
                      </div>
                      {commentsCounts !== 0 && (
                        <div className="flex items-center gap-1">
                          <PiChats />
                          {commentsCounts}
                        </div>
                      )}
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{description}</p>
                  </Table.Cell>
                  {/* Avatar Array  */}
                  <Table.Cell className="avatarsMap">
                    <ul className="flex">
                      {members.slice(0, 5).map((avatar, index) => (
                        <li key={index}>
                          <img
                            src={avatar}
                            className="w-8 h-8 object-cover"
                            alt={`Avatar ${index}`}
                          />
                        </li>
                      ))}
                      {members.length > 6 ? (
                        <li className="w-9 h-9 pt-1 flex items-center justify-center text-center bg-slate-200 text-gray-500">
                          {members.length - 5}+
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </Table.Cell>
                  {/* Categories Array  */}
                  <Table.Cell>
                    <div className="flex gap-1 flex-wrap">
                      {categories.map((cat, index) => (
                        <p
                          key={index}
                          className={`bg-${randomColor}-200 text-${randomColor}-700 border-2 border-${randomColor}-300 rounded-lg p-1 w-max`}
                        >
                          {cat}
                        </p>
                      ))}
                    </div>
                  </Table.Cell>
                  {/* Tags Array  */}
                  <Table.Cell>
                    <div className="flex gap-1 flex-wrap">
                      {tags.map((tag, index) => (
                        <p
                          key={index}
                          className="bg-gray-100 border-2 border-gray-200 text-slate-600 rounded-lg p-1"
                        >
                          #{tag}
                        </p>
                      ))}
                    </div>
                  </Table.Cell>
                  {/* Next Meeting Array  */}
                  <Table.Cell className="min-w-40">
                    <p
                      className={`bg-${randomColor}-200 text-${randomColor}-700 border-2 border-${randomColor}-300 rounded-lg p-1 w-max`}
                    >
                      {nextMeeting}
                    </p>
                  </Table.Cell>
                  <Table.Cell className="p-4 max-w-1"></Table.Cell>
                </Table.Row>
              );
            }
          )}
          {/* Sticky Table Footer  */}
          <Table.Row className="text-right static bottom-0 text-gray-500">
            <Table.Cell></Table.Cell>
            <Table.Cell>
              <span className="font-bold text-gray-900">10</span> count
            </Table.Cell>
            <Table.Cell>+ Add Calculation</Table.Cell>
            <Table.Cell className="w-60">+ Add Calculation</Table.Cell>
            <Table.Cell className="w-61">+ Add Calculation</Table.Cell>
            <Table.Cell className="w-60">+ Add Calculation</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
