"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Content } from "./ui/Content";
import { Footer } from "./ui/Footer";
import { Header } from "./ui/Header";
import { CustomWarning } from "./ui/CustomWarning";

export default function Home() {
  const [type, setType] = useState("photography")
  const [display, setDisplay] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setDisplay(false)
    },10000)
  },[])
  return (
    <div>
      {display && <CustomWarning setDisplay={setDisplay}/>}
      <Header/>
      <Content type={type}/>
      <Footer setType={setType}/>
    </div>
  );
}
