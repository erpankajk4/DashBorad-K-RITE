import DashProducts from "../components/DashProducts";
import { DashSidebar } from "../components/DashSidebar";

export default function Dashboard() {
  // TODO : Change Dashboard according to tab in URL
  return (
    <div className="min-h-screen flex flex-col md:flex-row p-3 gap-2">
      <div className="md:w-58 ">
        <DashSidebar />
      </div>
      {/* Products Dashboard  */}
      <DashProducts />
    </div>
  );
}
