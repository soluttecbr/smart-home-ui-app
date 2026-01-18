import { Plus } from "lucide-react";
import { IoHome } from "react-icons/io5";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="home-icon"><IoHome size={22} /></span>
        <h1>APTO4</h1>
      </div>

      <button className="add-btn">
        <Plus size={26} />
      </button>
    </header>
  );
}
