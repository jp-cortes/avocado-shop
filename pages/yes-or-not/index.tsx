import Link from "next/link";
import React, { useState } from "react";
import Layout from "@components/Layout/Layout";
import Styles from "./index.module.css";


const YesOrNot = () => {
  const [answer, setAnswer] = useState("NO");
  const [action, setAction] = useState(true);

  const handleAnswer = () => {
    setTimeout(() => {
      const random: number = Math.round(Math.random());
      if (random) {
        setAnswer("Yes");
        setAction(true);
      } else {
        setAction(true);
        setAnswer("NO");
      }
    }, 1000);
    setAction(false);
  };

  return (
    <Layout>
    <div className={Styles.container}>
      
      <div className={Styles.answer}>
        <p className={Styles.text}>{answer}</p>
        <p className={Styles.text}>{answer === "NO" ? "🤔" : "😁"}</p>

        <button
          className={action ? Styles.button : Styles.buttonInActive}
          onClick={handleAnswer}
        >
          Try again
        </button>
        <Link href="/" legacyBehavior>
          <a className={Styles.GoBackButton}>Back to home</a>
        </Link>
      </div>
    </div>
    </Layout>
  );
};
export default YesOrNot;
