import React from "react";
import MuiModal from "./MuiModal";

const HomeModal = () => {
  return (
    <div>
      <MuiModal
        title="Title1"
        content="Anant Mishra"
      />
      <MuiModal
        title="Title2"
        content="Successive Technology"
      />
    </div>
  );
};

export default HomeModal;