import React, { useRef } from "react";

import 'flexmonster/flexmonster.css';
import * as FlexmonsterReact from 'react-flexmonster';
import 'flexmonster/lib/flexmonster.highcharts.js';
import Highcharts from 'highcharts';

const ref = React.useRef();

const onReportComplete = () => {
    this.myRef.current.flexmonster.off(this.reportComplete);
    //creating charts after Flexmonster instance is launched
    this.createChart();
}

const ReportScreen = () =>{
    return(
        <div className="App">
            <FlexmonsterReact.Pivot
            ref={ref}
            toolbar={true}
            width="100%"
            report="https://cdn.flexmonster.com/reports/report.json"
            reportcomplete={onReportComplete}
            />
            <div className="chart-container">
                <div id="highcharts-container"></div> //creating a charts container
            </div>
        </div>
    )
}

export default ReportScreen;