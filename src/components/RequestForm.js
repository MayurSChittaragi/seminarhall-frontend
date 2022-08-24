import React, { useState, useEffect } from "react";
import { DatePicker } from "@mantine/dates";
import { TimeInput } from "@mantine/dates";

const renderDateTimes = (data) => {
	// console.log(data);
	return data.map((entry) => {
		// console.log(entry);
		return (
			<div key={entry.date}>
				<p>{entry.date.toDateString()}</p>
				<p>{entry.fromTime.toString()}</p>
				<p>{entry.toTime.toString()}</p>
			</div>
		);
	});
};

const RequestForm = () => {
	const [date, setDate] = useState();
	const [fromTime, setFromTime] = useState(date);
	const [toTime, setToTime] = useState(date);
	const [renderedDates, setRenderedDates] = useState([]);
	const [rawData, setRawData] = useState([]);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		// console.log(event);
		const curatedData = {
			capacity: event.target[0].value,
			description: event.target[1].value,
			date: Date.now(),
			dates: rawData, //array of dates for the seminar.
			timefrom: fromTime,
			timeto: toTime,
			preference1: event.target[11].value,
			preference2: event.target[12].value,
			preference3: event.target[13].value,
		};
		//axios call to send the curated Data.
		// console.log(curatedData);
	};

	useEffect(() => {
		setRenderedDates(renderDateTimes(rawData));
	}, [rawData]);

	const dates = async (e) => {
		e.preventDefault();
		fromTime.setFullYear(
			date.getFullYear(),
			date.getMonth(),
			date.getDate()
		);
		toTime.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
		const currData = {
			date: date,
			fromTime: fromTime,
			toTime: toTime,
		};
		await setRawData([...rawData, currData]);
		// setRenderedDates(renderDateTimes(rawData));
	};
	return (
		<div>
			<h1>Request Form</h1>
			<div className="form-group">
				<form onSubmit={handleFormSubmit}>
					<div>
						<label form="">Capacity: </label>
						<input type="number" />
					</div>
					<div>
						<label form="">Description: </label>
						<textarea type="text" />
					</div>
					{renderedDates}
					<div>
						<label form="">Dates: </label>
						<DatePicker
							placeholder="Pick date"
							label="Event date"
							value={date}
							onChange={(e) => {
								setDate(e);
							}}
						/>
					</div>
					<div>
						<TimeInput
							label="From Time"
							clearable
							value={fromTime}
							onChange={(e) => setFromTime(e)}
						/>
					</div>
					<div>
						<TimeInput
							label="To Time"
							clearable
							value={toTime}
							onChange={(e) => setToTime(e)}
						/>
					</div>
					<button onClick={dates}>+</button>
					<div>
						<label form="">Preference 1: </label>
						<input type="text" />
					</div>
					<div>
						<label form="">Preference 2: </label>
						<input type="text" />
					</div>
					<div>
						<label form="">Preference 3: </label>
						<input type="text" />
					</div>
					<button type="submit">SUBMIT</button>
				</form>
			</div>
		</div>
	);
};

export default RequestForm;
