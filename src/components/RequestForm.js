import React, { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { TimeInput } from "@mantine/dates";

const RequestForm = () => {
	const [date, setDate] = useState();
	const [fromTime, setTime] = useState();

	const dates = () => {
		const data = [];
		const currData = {
			date: date.getDate(),
			timeFrom: time[0].getTime(),
			timeTo: time[1].getTime(),
		};
		data.push(currData);
	};
	return (
		<div>
			<h1>Request Form</h1>
			<div className="form-group">
				<form>
					<div>
						<label form="">Capacity: </label>
						<input type="text" />
					</div>
					<div>
						<label form="">Description: </label>
						<textarea type="text" />
					</div>
					<div>
						<label form="">Dates: </label>
						<DatePicker
							placeholder="Pick date"
							label="Event date"
							onChange={(e) => setDate(e)}
						/>
						<TimeInput
							label="From Time"
							clearable
							onChange={(e) => console.log(e)}
						/>
					</div>
					<button onClick={dates}>+</button>
					<div>
						<label form="">Capacity: </label>
						<input type="text" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default RequestForm;
