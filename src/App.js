import logo from './logo.svg';
import './App.css';
import { LineChart, Line } from 'recharts';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import NumericInput from 'react-numeric-input';

let data = [
	{name: 'Page A', uv: 400, pv: 2400, amt: 1422},
	{name: 'Page B', uv: 230, pv: 1300, amt: 1877},
	{name: 'Page D', uv: 400, pv: 1455, amt: 722},
	{name: 'Page C', uv: 523, pv: 2435, amt: 2234},
	{name: 'Page D', uv: 400, pv: 1455, amt: 722}
];

/*
function doIt() {
	console.log("test 001");
}
<DatePicker selected={startDate} onChange={doIt()} />
*/

const App = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Weight Vision
        </p>
		Pick Date
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
		Pick Weight
		<NumericInput min={0} precision={1} />
		<LineChart width={400} height={400} data={data}>
			<Line type="monotone" dataKey="uv" stroke="#8884d8" />
			<Line type="monotone" dataKey="pv" stroke="#288448" />
		</LineChart>
      </header>
    </div>
  );
};


export default App;
