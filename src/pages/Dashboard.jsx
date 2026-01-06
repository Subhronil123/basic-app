import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

// export default function Dashboard() {
//     return (
//         <div className="h-screen flex items-center justify-center bg-grey-900 text-black text-3xl">
//             Tailwind is Working
//         </div>
//     )
// }

export default function Dashboard() {
    return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
 
      <div className="flex flex-1 flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}