import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>
          😞 <br />
        </span>
        Ничего не найдено
      </h1>
      <h3>К сожалению страница недоступна...</h3>
    </div>
  );
};

export default NotFoundBlock;
