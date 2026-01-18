import { Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span className="home-icon">🏠</span>
        <h1>APTO4</h1>
      </div>

      <button className="add-btn">
        <Plus size={22} />
      </button>
    </header>
  );
}
