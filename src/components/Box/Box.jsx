import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Box.css";
import { motion } from "framer-motion";
import cancelIcon from "../Assets/cancel.png"; // Import an appropriate cancel icon
import Chart from  'react-apexcharts'
import { color } from "chart.js/helpers";

const Box = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div layout>
      {expanded ? 
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      :
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      }
    </motion.div>
  );
};

function CompactCard({ param, setExpanded }) {
  return (
    <div
      className="CompactCard"
      style={{
        backgroundImage: param.color.backGround,
        boxShadow: param.color.boxShadow
      }}
      onClick={setExpanded}
      layoutId="compactCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
       
      </div>
      <div className="detail">
        <span className="title-name">{param.title}</span> <br/>
        <span>{param.subtitle}</span>
        <h5>${param.value}</h5>
        <span>{param.change}</span>
        <br />
        <span>{param.percentageChange}</span>
        <span>{param.currencyValue}</span>
        <span>{param.currencyType}</span>
      </div>
    </div>
  );
}

function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:00:00.000Z",
          "2018-09-19T02:00:00.000Z",
          "2018-09-19T03:00:00.000Z",
          "2018-09-19T04:00:00.000Z",
          "2018-09-19T05:00:00.000Z",
          "2018-09-19T06:00:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        backgroundImage: param.color.backGround,
        boxShadow: param.color.boxShadow
      }}
      layoutId="expandableCard"
    >
       <div >
       <img src={cancelIcon} alt="Cancel Icon" onClick={setExpanded}  style={{ width: "40px", height: "40px" }}/>
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
         <Chart series={param.series} type="area" options={data.options} /> 
      </div>
      <span>Loss 24 hours </span>
    </motion.div>
  );
}

export default Box;
