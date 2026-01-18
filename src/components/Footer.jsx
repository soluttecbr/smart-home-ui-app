import { GoHome } from "react-icons/go";
import { RiRobot2Line } from "react-icons/ri";
import { FaRegCheckSquare } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="footer">
      <button className="active"><GoHome size={20} /><span>Início</span></button>
      <button><FaRegCheckSquare size={20} /><span>Inteligente</span></button>
      <button><RiRobot2Line size={20} /><span>Assistente</span></button>
      <button><IoPersonCircleOutline size={20} /><span>Mim</span></button>
    </footer>
  );
}
