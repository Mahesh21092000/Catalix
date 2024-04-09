import React from "react";
import "./Main.css";
import Box from "../Box/Box";

function Main() {
  const data = [
    {
      title: "EFFICIENCY",
      color: {
        backGround: "linear-gradient(180deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.7))",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      subtitle: "Lorem ipsum",
      value: 1.1921,
      change: -0.0015,
      series: [
        {
          name: "EFFICIENCY",
          data: [32, 50, 70, 30, 90, 110, 150, 200],
        },
      ],
      percentageChange: -0.13,
      currencyValue: 0.0,
      currencyType: "USD",
    },
    {
      title: "TIME TO MARKET",
      color: {
        backGround: "linear-gradient(180deg, rgba(40, 167, 69, 0.5), rgba(40, 167, 69, 0.5))",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 80,
      subtitle: "Lorem ipsum",
      value: "327,176",
      change: "-97,914.00",
      series: [
        {
          name: "TIME TO MARKET",
          data: [32, 40, 50, 30, 75, 80, 90, 108],
        },
      ],
      percentageChange: -23.03,
      currencyValue: "131,040,723,108",
      currencyType: "JPY",
    },
    {
      title: "TECH DEBT",
      color: {
        backGround: "linear-gradient(180deg, rgba(253, 126, 20, 0.5), rgba(253, 126, 20, 0.5))",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 60,
      subtitle: "Lorem ipsum",
      value: 1.1763,
      change: 0.0015,
      series: [
        {
          name: "TECH DEBT",
          data: [32, 40, 50, 55, 50,65, 69, 75],
        },
      ],
      percentageChange: 0.13,
      currencyValue: 0.0,
      currencyType: "USD",
    },
    {
      title: "PREDICTABILITY",
      color: {
        backGround: "linear-gradient(180deg, rgba(220, 53, 69, 0.5), rgba(220, 53, 69, 0.5))",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 40,
      subtitle: "Lorem Ipsum",
      value: 0.0031301,
      change: -0.0005043,
      series: [
        {
          name: "PREDICTABILITY",
          data: [30, 25, 20, 23, 22, 15, 13, 10],
        },
      ],
      percentageChange: -13.88,
      currencyValue: "1,566",
      currencyType: "BTC",
    },
  ];

  return (
    <div className="container-graph">
      {data.map((item, index) => (
        <div className="parentContainer" key={index}>
          <Box
            key={index}
            title={item.title}
            color={item.color}
            barValue={item.barValue}
            subtitle={item.subtitle}
            value={item.value}
            change={item.change}
            series={item.series}
            percentageChange={item.percentageChange}
            currencyType={item.currencyType}
          />
        </div>
      ))}
    </div>
  );
}

export default Main;
