import React from "react";
import ContractUsForm from "../contractUsForm";
import ContractUsAside from "../contractUsAside";

const ContractUsMain = () => {
  return (
    <div className="container ">
      <div className="row row-reverse-tab ">
        <div className="col-lg-3 padding_top--40">
          <ContractUsAside />
        </div>
        <div className="col-lg-8 padding_top--40">
          <ContractUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContractUsMain;
