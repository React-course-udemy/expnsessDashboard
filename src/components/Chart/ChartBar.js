import React from "react";
import "../../css/ChartBar.css";

const ChartBar = ({ label, value, maxValue }) => {
  let barFillHight = "0%";

  if (maxValue > 0) {
    barFillHight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHight }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
