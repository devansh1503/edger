"use client"
import { useState } from "react";
import styles from "./page.module.css";
import { Content } from "./ui/Content";
import { Footer } from "./ui/Footer";
import { Header } from "./ui/Header";
import { Login } from "./ui/Login";

export default function Home() {
  const [type, setType] = useState("photography")
  return (
    <div>
      <Header/>
      <Content type={type}/>
      {/* <Login/> */}
      <Footer setType={setType}/>
    </div>
  );
}
