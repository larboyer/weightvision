import logo from './logo.svg';
import './App.css';
import { LineChart, Line } from 'recharts';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import NumericInput from 'react-numeric-input';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

let data = [
	{name: 'Page A', uv: 400, pv: 2400, amt: 1422},
	{name: 'Page B', uv: 230, pv: 1300, amt: 1877},
	{name: 'Page D', uv: 400, pv: 1455, amt: 722},
	{name: 'Page C', uv: 523, pv: 2435, amt: 2234},
	{name: 'Page D', uv: 400, pv: 1455, amt: 722}
];


/* Just curious; wft does this syntax mean?
const App = () => {
*/

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>
          Weight Vision
        </h4>
		<p>
		Pick Date
		</p>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
		<p>
		Pick Weight
		</p>
		<NumericInput min={0} precision={1} />
		<LineChart width={400} height={400} data={data}>
			<Line type="monotone" dataKey="uv" stroke="#8884d8" />
			<Line type="monotone" dataKey="pv" stroke="#288448" />
		</LineChart>
      </header>
      <AmplifySignOut />
    </div>
  );
}


/*
function doIt() {
	console.log("test 001");
}
<DatePicker selected={startDate} onChange={doIt()} />
*/

// export default App;
export default withAuthenticator(App);

