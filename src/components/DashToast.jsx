import { Button, Toast, Dropdown } from "flowbite-react";
import { HiOutlineArchive } from "react-icons/hi";
export function DashToast() {
  return (
    <Toast className="max-w-max border border-slate-200  md:absolute md:bottom-10 md:left-[50%] md:translate-x-[-40%]">
      <div className="flex items-center font-medium text-black gap-2">
        <p>
          <span className="px-2 bg-black rounded-lg text-white">3</span>{" "}
          Selected
        </p>
        <Button color="light">
          <HiOutlineArchive className="mr-2" />
          Archive
        </Button>
        <Button color="light">
          <HiOutlineArchive className="mr-2" />
          Delete
        </Button>
        <Dropdown label="More" color="light" className="border rounded-xl">
          <Dropdown.Item>Copy</Dropdown.Item>
          <Dropdown.Item>Move</Dropdown.Item>
          <Dropdown.Item>Select All</Dropdown.Item>
          <Dropdown.Item>Delete All</Dropdown.Item>
        </Dropdown>
        <Toast.Toggle />
      </div>
    </Toast>
  );
}
