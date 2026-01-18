import { useState, useRef, useEffect } from "react";
import { GoHome } from "react-icons/go";
import { RiRobot2Line } from "react-icons/ri";
import { FaRegCheckSquare } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Footer() {
  const [active, setActive] = useState(0);
  const indicatorRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const btn = buttonsRef.current[active];
    if (!btn || !indicatorRef.current) return;

    const btnRect = btn.getBoundingClientRect();
    const parentRect = btn.parentElement.getBoundingClientRect();

    const x =
      btnRect.left -
      parentRect.left +
      btnRect.width / 2 -
      22;

    indicatorRef.current.style.transform = `translateX(${x}px)`;
  }, [active]);

  const items = [
    { icon: <GoHome size={20} />, label: "Início" },
    { icon: <FaRegCheckSquare size={20} />, label: "Inteligente" },
    { icon: <RiRobot2Line size={20} />, label: "Assistente" },
    { icon: <IoPersonCircleOutline size={20} />, label: "Mim" },
  ];

  return (
    <footer className="footer">
      {items.map((item, index) => (
        <button
          key={index}
          ref={(el) => (buttonsRef.current[index] = el)}
          className={active === index ? "active" : ""}
          onClick={() => setActive(index)}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}

      <span ref={indicatorRef} className="nav-indicator" />
    </footer>
  );
}

