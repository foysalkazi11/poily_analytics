import React from "react";
import styles from "./ContractUsAside.module.scss";
const whatToExpect = [
  "Schedule a meeting for mutual show and tell",
  "Get to know each other",
  "Learn about your problem statement",
  "Review your efforts in the problem space",
  "Understand Poily Analytic product design process",
  "Understand your Stakeholders",
  "What is your Impact Goal",
  "Plan next steps",
];
const ContractUsAside = () => {
  return (
    <div className={styles.contractUsAsideContainer}>
      <p className={styles.text}>What to Expect ?</p>
      <ul>
        {whatToExpect?.map((step) => (
          <li className={styles.list} key={step}>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractUsAside;
