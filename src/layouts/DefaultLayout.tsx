import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";
import styled from "../components/styles/default.module.css"

export function DefaultLayout() {
   return(
      <>
         <div className={`${styled.defaultContainer}`}>
            <Header />
            <Outlet />
         </div>
      </>
   )
}