import DropdownButton from "../FormSelection/DropdownButton";
import OccasionIcon from "../../images/OccasionIcon.png";
import { useState } from "react";

function Form() {

    const [occasion, setOccasion] = useState("");
    const [seating, setSeating] = useState("");
    const [partySize, setPartySize] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [availableTimes, setavailableTimes] = useState(["10:00 AM", "11:00 AM", "12:00 PM",
        "1:00 PM", "2:00 PM", "3:00 PM",
        "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"]);

    return (
        <form>
            <h3>Reservation Details</h3>
            <div className='form-container'>
                <DropdownButton image={<img src={OccasionIcon} />} options={[1, 2, 3, 4, 5, 6, 7, 8]} placeholder="Party Size" selectedOption={partySize} optionSelection={setPartySize} />
                <DropdownButton image={<img src={OccasionIcon} />} options={["Indoor", "Outdoor", "Any"]} placeholder="Seating" selectedOption={seating} optionSelection={setSeating} />
                <DropdownButton image={<img src={OccasionIcon} />} options={["Anniversary", "Birthday", "Engagement", "None"]} placeholder="Occasion" selectedOption={occasion} optionSelection={setOccasion} />
                <div className={`date-selection-box ${date ? 'date-selected' : ''}`}>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    >
                    </input>
                </div>
                <DropdownButton image={<img src={OccasionIcon} />} options={date ? availableTimes : ["Select a Date"]} placeholder="Time" selectedOption={time} optionSelection={setTime} />
                <div className='input-box'></div>
                <div className='comment-box'></div>
            </div>
            <div className='next-box'></div>
        </form>
    )
}

export default Form;