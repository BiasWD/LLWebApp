import DropdownButton from "../FormSelection/DropdownButton";
import OccasionIcon from "../../images/OccasionIcon.png";
import { useState } from "react";

function Form() {

    const [step, setStep] = useState(1);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const [occasion, setOccasion] = useState("");
    const [seating, setSeating] = useState("");
    const [partySize, setPartySize] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [comment, setComment] = useState("");

    const [availableTimes, setavailableTimes] = useState(["10:00 AM", "11:00 AM", "12:00 PM",
        "1:00 PM", "2:00 PM", "3:00 PM",
        "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"]);

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [email, setEmail] = useState("");

    return (
        <form>
            {step === 1 && (
                <>
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
                        <DropdownButton image={<img src={OccasionIcon} />} options={date ? availableTimes : ["Please select a date"]} placeholder="Time" selectedOption={time} optionSelection={setTime} disabled={date ? false : true} />
                        <div className='input-box'></div>
                        <textarea
                            className={`comment-box ${comment ? 'input-complete' : ''}`}
                            placeholder="Add any additional comments here"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)} >

                        </textarea>
                    </div>
                    <div className='next-box' onClick={nextStep}>Next</div>
                </>)
            }
            {step === 2 && (
               <>
               <h3>Contact Details</h3>
               <div className='form-container'>
                 <label htmlFor="firstName">First Name:</label>
                 <input className="contact-input"
                   type="text"
                   id="firstName"
                   name="firstName"
                   placeholder="First Name*"
                   value={firstName}
                   onChange={(e) => setFirstName(e.target.value)}
                   required
                 />

                 <label htmlFor="lastName">Last Name:</label>
                 <input className="contact-input"
                   type="text"
                   id="lastName"
                   name="lastName"
                   placeholder="Last Name*"
                   value={lastName}
                   onChange={(e) => setLastName(e.target.value)}
                   required
                 />

                 <label htmlFor="phoneNumber">Phone Number:</label>
                 <input className="contact-input fullwidth-input"
                   type="tel"
                   id="phoneNumber"
                   name="phoneNumber"
                   placeholder="Phone Number*"
                   value={phoneNumber}
                   onChange={(e) => setPhoneNumber(e.target.value)}
                   required
                 />

                 <label htmlFor="email">Email:</label>
                 <input className="contact-input fullwidth-input"
                   type="email"
                   id="email"
                   name="email"
                   placeholder="Email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                 />
               </div>
               <div className='next-box' onClick={prevStep}>Back</div>
               <div className='next-box'>Submit</div>
             </>
            )}
        </form>
    )
}

export default Form;