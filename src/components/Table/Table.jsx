import React from 'react'
import './Table.css'
import Chart from 'react-apexcharts'

function Table() {
    const TableData = [
        {
            "page": "/Defect Arrival Rate",
            "pageviews": "872,337 (15.82%)",
            "unique": "574,332 (15.33%)",
            "avg": "00:05:43",
            "extraces": "802,873 (16.75%)",
            "exit": "25.96%",
            "pagevalue": "1,093 (5.11%)"
        },
        {
            "page": "/fixed Rate",
            "pageviews": "803,792 (14.39%)",
            "unique": "456,791 (13.93%)",
            "avg": "00:05:24",
            "extraces": "793,982 (16.64%)",
            "exit": "76,13%",
            "pagevalue": "6,792 (36.16%)"
        },
        {
            "page": "/cycle time ",
            "pageviews": "740,702 (13.46%)",
            "unique": "405,860 (13.25%)",
            "avg": "00:04:33",
            "extraces": "684,674 (14.33%)",
            "exit": "41.54%",
            "pagevalue": "702 (3.47%)"
        },
        {
            "page": "/lead time",
            "pageviews": "676,656 (10.29%)",
            "unique": "340,765 (11.70%)",
            "avg": "00:04:12",
            "extraces": "636,982 (13.02%)",
            "exit": "46.42%",
            "pagevalue": "2,659 (11.64%)"
        },
        {
            "page": "/new features",
            "pageviews": "508,837 (7.74%)",
            "unique": "317,543 (10.66%)",
            "avg": "00:04:11",
            "extraces": "555,982 (10.44%)",
            "exit": "27.40%",
            "pagevalue": "4,508 (23.43%)"
        },
        {
            "page": "/ready feature",
            "pageviews": "495,938 (7.38%)",
            "unique": "310,554 (10.58%)",
            "avg": "00:02:56",
            "extraces": "297,303 (6.07%)",
            "exit": "28.89%",
            "pagevalue": "495 (7.38%)"
        },
        {
            "page": "/over time ",
            "pageviews": "433,242 (13.44%)",
            "unique": "213,6346 (22.54%)",
            "avg": "00:02:33",
            "extraces": "234,345 (13.32%)",
            "exit": "22.34%",
            "pagevalue": "454 (3.47%)"
        },
    
            {
                "page": "/homepage",
                "pageviews": "543,210 (8.12%)",
                "unique": "325,698 (11.11%)",
                "avg": "00:03:15",
                "extraces": "309,402 (6.33%)",
                "exit": "30.25%",
                "pagevalue": "543 (8.12%)"
            },
            {
                "page": "/login",
                "pageviews": "512,167 (7.64%)",
                "unique": "305,713 (10.41%)",
                "avg": "00:02:45",
                "extraces": "295,802 (6.05%)",
                "exit": "28.72%",
                "pagevalue": "512 (7.64%)"
            },
            {
                "page": "/product-page",
                "pageviews": "521,984 (7.79%)",
                "unique": "320,009 (10.91%)",
                "avg": "00:03:02",
                "extraces": "308,111 (6.29%)",
                "exit": "29.89%",
                "pagevalue": "521 (7.79%)"
            },
            {
                "page": "/checkout",
                "pageviews": "499,820 (7.46%)",
                "unique": "312,447 (10.65%)",
                "avg": "00:02:58",
                "extraces": "299,623 (6.12%)",
                "exit": "28.50%",
                "pagevalue": "499 (7.46%)"
            },
            {
                "page": "/profile",
                "pageviews": "554,322 (8.27%)",
                "unique": "330,874 (11.29%)",
                "avg": "00:03:21",
                "extraces": "315,104 (6.44%)",
                "exit": "31.10%",
                "pagevalue": "554 (8.27%)"
            },
        
    ]

    const data = [10, 41, 35, 51, 49, 62, 69, 91, 148];

const differences = data.map((value, index, array) => {
  if (index === 0) {
    return null; // No difference for the first data point
  } else {
    return value - array[index - 1]; // Calculate the difference
  }
});

    const param = {
        series: [{
          data: differences,
        }],
        options: {
          chart: {
            type: 'bar',
            toolbar: {
              show: false // Hide the toolbar buttons
            }
          },
          plotOptions: {
            bar: {
              horizontal: false, // Set to true if you want horizontal bars
              distributed: true, // Distribute bars evenly
              dataLabels: {
                enabled: false // Hide data labels on bars
              }
            }
          },
          xaxis: {
            labels: {
              show: false // Hide x-axis labels
            }
          },
          yaxis: {
            labels: {
              show: false // Hide y-axis labels
            }
          },
          dataLabels: {
            enabled: false // Hide data labels completely
          }
        }
      };
      
    
  return (
    <div >
        
          
        <table>
    <tbody>
        {/* Heading Row */}
        <tr>
            <td colSpan="7" className="heading">
                <div>
                    <h5>PAGEVIEWS <span className="material-symbols-outlined">arrow_drop_down</span></h5>
                    <span className='all-btn'><button>Today</button><button>Yesterday</button><button>Week</button><button>Month</button><button>Quarter</button><button>Year</button></span>
                    <button className="select">Select Period <span className="material-symbols-outlined">arrow_drop_down</span></button>
                </div>
            </td>
        </tr>

        {/* Table Headers */}
        <tr>
            <th>Page</th>
            <th>Pageviews <br/> 356,928 <br/>
            <div className="chart-container">
            <Chart options={param.options} series={param.series} type="area" />
            </div>
            </th>
            <th>Unique PageViews <br/> 275,588 <br/>
            <div className="chart-container">
            <Chart options={param.options} series={param.series} type="area" />
            </div>
            </th>

            <th>Avg. time on page <br/> 00:03:51 <br/>
            <div className="chart-container">
            <Chart options={param.options} series={param.series} type="area" />
            </div></th>
            <th>Extraces <br/> 315,643 <bbr/>
            <div className="chart-container">
            <Chart options={param.options} series={param.series} type="area" />
            </div>
            </th>
            <th>% Exit <br/> 39.84% <br/>
            <div className="chart-container">
            <Chart options={param.options} series={param.series} type="area" />
            </div></th>
            <th>Page Value <br/> $19,983
            <br/>
            <div className="chart-container">
            <Chart options={param.options} series={param.series} type="area" />
            </div></th>
        </tr>

        {/* Table Data */}
        {TableData.map((data, index) => (
            <tr key={index}>
                <td>{data.page}</td>
                <td>{data.pageviews}</td>
                <td>{data.unique}</td>
                <td>{data.avg}</td>
                <td>{data.extraces}</td>
                <td>{data.exit}</td>
                <td>{data.pagevalue}</td>
            </tr>
        ))}
    </tbody>
</table>

</div>
  )
}


export default Table
