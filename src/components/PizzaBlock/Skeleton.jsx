import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="1" y="296" rx="10" ry="10" width="280" height="15" />
    <rect x="135" y="341" rx="0" ry="0" width="1" height="25" />
    <rect x="0" y="325" rx="10" ry="10" width="279" height="58" />
    <rect x="133" y="340" rx="0" ry="0" width="0" height="2" />
    <rect x="0" y="400" rx="10" ry="10" width="92" height="33" />
    <rect x="122" y="395" rx="20" ry="20" width="152" height="45" />
    <circle cx="135" cy="126" r="121" />
  </ContentLoader>
);

export default MyLoader;
