import { Timer, Scroll } from "@phosphor-icons/react";
import alterraStamp from "../assets/imgs/altrraStamp.png";
import { NavLink } from "react-router-dom";
import styled from "./styles/header.module.css"

export function Header() {
  return (
    <>
      <header className="w-full flex justify-between items-center px-10 py-4 bg-primary">
        <div>
          <img className="w-44" src={alterraStamp} alt="Aterra Logo" />
        </div>
        <nav className="flex text-primaryText gap-5">
          <NavLink
            className={`${styled.activeted} border-t-2 border-b-2 border-t-transparent border-b-transparent hover:border-b-blueLight transition p-1 :text-blueLight`}
            to="/"
            title="Timer"
          >
            <Timer size={35} />
          </NavLink>
          <NavLink
            className={`${styled.activeted} border-t-2 border-b-2 border-t-transparent border-b-transparent hover:border-b-blueLight transition p-1`}
            to="/history"
            title="Histórico"
          >
            <Scroll size={35} />
          </NavLink>
        </nav>
      </header>
    </>
  );
}
