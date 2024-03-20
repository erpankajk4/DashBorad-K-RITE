import { Avatar, Sidebar } from "flowbite-react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { GiSpinningSword } from "react-icons/gi";
import { FaPenNib } from "react-icons/fa";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";
import { PiFanBold } from "react-icons/pi";

import { Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

export function DashSidebar() {
    // State to store folder data
  const [folderData, setFolderData] = useState([]);
  
    // Fetch data from JSON file when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setFolderData(data.folders);
        // console.log(data.folders);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Sidebar
      id="DashSidebar"
      className=" w-full rounded-xl border border-solid border-slate-200 md:w-[20rem] overflow-hidden"
    >
      <Sidebar.Items className="w-full">
        <Sidebar.ItemGroup className="">
          <div className="h-[93vh] flex flex-col justify-between ">
            <div>
              {/* Brand Name  */}
              <Sidebar.Item
                href="#"
                icon={GiSpinningSword}
                className="DashHeading"
              >
                <div className="grid grid-cols-4">
                  <div className="col-span-3">
                    <p className="text-slate-500 text-sm">INC</p>
                    <p className="font-medium">InnovateHub</p>
                  </div>
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                    className="col-span-1"
                  />
                </div>
              </Sidebar.Item>

              <Sidebar.ItemGroup>
                <Sidebar.Item
                  href="#"
                  icon={FaPenNib}
                  label={
                    <p className="flex p-1 text-gray-500">
                      <PiFanBold />
                      +1
                    </p>
                  }
                  labelColor="light"
                >
                  Design Team
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={HiOutlineSpeakerphone}
                  label={
                    <p className="flex p-1 text-gray-500">
                      <PiFanBold />
                      +2
                    </p>
                  }
                  labelColor="light"
                >
                  Marketing Team
                </Sidebar.Item>
                <Sidebar.Item
                  href="#"
                  icon={FaCode}
                  label={
                    <p className="flex p-1 text-gray-500">
                      <PiFanBold />
                      +3
                    </p>
                  }
                  labelColor="light"
                >
                  Development Team
                </Sidebar.Item>
                {/* Create a team */}
                <Sidebar.Item
                  href="#"
                  icon={MdOutlineLibraryAdd}
                  className="text-slate-500 "
                >
                  Create a team
                </Sidebar.Item>
              </Sidebar.ItemGroup>

              {/* FOLDERS */}
              <Sidebar.ItemGroup>
                <Sidebar.Collapse
                  label="FOLDERS"
                  className="text-slate-500 "
                  renderChevronIcon={(theme, open) => {
                    const IconComponent = open
                      ? HiOutlineMinusSm
                      : HiOutlinePlusSm;
                    return (
                      <IconComponent
                        aria-hidden
                        className={twMerge(
                          theme.label.icon.open[open ? "on" : "off"]
                        )}
                      />
                    );
                  }}
                >
                  <Sidebar.Item>
                    <form className="flex  gap-1">
                      <TextInput
                        className="w-[130px]"
                        id="folderName"
                        type="text"
                        placeholder="Folder Name"
                        required
                      />
                      <Button color="dark" type="submit">
                        Add
                      </Button>
                    </form>
                  </Sidebar.Item>
                </Sidebar.Collapse>

                {Object.entries(folderData).map(([folderName, items]) =>
                  items.length === 0 ? (
                    <Sidebar.Item key={folderName} icon={CiFolderOn} href="#">
                      {folderName}
                    </Sidebar.Item>
                  ) : (
                    <Sidebar.Collapse
                      key={folderName}
                      icon={CiFolderOn}
                      label={folderName}
                    >
                      {items.map((item) => (
                        <Sidebar.Item key={item.id} href="#">
                          {item.name}
                        </Sidebar.Item>
                      ))}
                      <Sidebar.Item
                        href="#"
                        icon={MdOutlineLibraryAdd}
                        className="text-slate-500"
                      >
                        Add new sub
                      </Sidebar.Item>
                    </Sidebar.Collapse>
                  )
                )}
              </Sidebar.ItemGroup>
            </div>
            {/* lower Content  */}
            <div>
              <Sidebar.Item href="#" icon={IoPersonAddOutline}>
                Invite teammates
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={FaRegCircleQuestion}
                label={<p className="flex p-1 text-gray-500">0/6</p>}
                labelColor="light"
              >
                Help and first steps
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={MdQuestionMark}
                label={<p className="flex p-1 text-sm">Add billing</p>}
                labelColor="dark"
              >
                days left on trial
              </Sidebar.Item>
            </div>
          </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
