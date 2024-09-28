import DropdownButton from "../FormSelection/DropdownButton";
import OccasionIcon from "../../images/OccasionIcon.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Form({ openTimes, updateTimes, testing }) {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const [occasion, setOccasion] = useState("");
  const [seating, setSeating] = useState("");
  const [partySize, setPartySize] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState("");

  const dateInputRef = useRef(null);

  const handleDateClick = () => {
    // Trigger the click event of the other button
    if (dateInputRef.current) {
      dateInputRef.current.focus();
    }
  };

  const handleDateChange = (e) => {
    const newDateString = e.target.value;
    setDate(newDateString);
    setTime("");
  };

  const navigate = useNavigate();

  useEffect(() => {
    updateTimes(new Date(date));
  }, [date]);

  const submitAPI = function (formData) {
    return true;
  };

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [isComment, setIsComment] = useState();

  const validateComment = () => {
    if (!comment) {
      setIsComment(false);
    } else {
      setIsComment(true);
    }
  };

  const [isValidPhone, setIsValidPhone] = useState();

  const validatePhoneNumber = () => {
    const phoneRegex =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

    setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
    if (!phoneNumber) {
      setIsValidPhone(false);
    } else if (!phoneRegex.test(phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Must be a valid Phone Number",
      }));
      setIsValidPhone(false);
    } else setIsValidPhone(true);
  };

  const [isValidFirstName, setIsValidFirstName] = useState();

  const validateFirstName = () => {
    const nameRegex =
      /^([a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+)*[.]{0,1}){1,2}$/;

    setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
    if (!firstName) {
      setIsValidFirstName(false);
    } else if (!nameRegex.test(firstName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First Name must contain valid characters",
      }));
      setIsValidFirstName(false);
    } else setIsValidFirstName(true);
  };

  const [isValidLastName, setIsValidLastName] = useState();

  const validateLastName = () => {
    const nameRegex =
      /^([a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+)*[.]{0,1}){1,2}$/;

    setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
    if (!lastName) {
      setIsValidLastName(false);
    } else if (!nameRegex.test(lastName)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last Name must contain valid characters",
      }));
      setIsValidLastName(false);
    } else setIsValidLastName(true);
  };

  const [isValidEmail, setIsValidEmail] = useState();

  const validateEmail = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    if (!email) {
      setIsValidEmail(false);
    } else if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Must be a valid Email Address",
      }));
      setIsValidEmail(false);
    } else setIsValidEmail(true);
  };

  const handleSubmit = (e, formData) => {
    e.preventDefault();
      if (submitAPI(formData)) {
        console.log("form submitted");
        navigate("/confirmedbooking");
      } else {
        console.log("form submission failed");
      }
  };

  const [displayPhoneErrors, setDisplayPhoneErrors] = useState(false);

  const showDisplayPhoneError = () => {
    setDisplayPhoneErrors(true);
  }

  const hideDisplayPhoneError = () => {
    setDisplayPhoneErrors(false);
  }

  const [displayEmailErrors, setDisplayEmailErrors] = useState(false);

  const showDisplayEmailError = () => {
    if (email.length > 1) {
  setDisplayEmailErrors(true);
    }
  };

  const hideDisplayEmailError = () => {
  setDisplayEmailErrors(false);
  };

  useEffect(() => {
    validateFirstName();
    validateLastName();
    validatePhoneNumber();
    validateEmail();
  }, [firstName, lastName, phoneNumber, email]);

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, [
          occasion,
          seating,
          partySize,
          date,
          time,
          comment,
          firstName,
          lastName,
          phoneNumber,
          email,
          subscribed,
        ])
      }
    >
      {step === 1 && (
        <>
          <div className="form-top">
            <h3>Reservation Details</h3>
            <div className="form-container">
              <DropdownButton
                image={<img src={OccasionIcon} />}
                options={[1, 2, 3, 4, 5, 6, 7, 8]}
                placeholder="Party Size"
                selectedOption={partySize}
                optionSelection={setPartySize}
              />
              <DropdownButton
                image={<img src={OccasionIcon} />}
                options={["Indoor", "Outdoor", "Any"]}
                placeholder="Seating"
                selectedOption={seating}
                optionSelection={setSeating}
              />
              <DropdownButton
                image={<img src={OccasionIcon} />}
                options={["Anniversary", "Birthday", "Engagement", "None"]}
                placeholder="Occasion"
                selectedOption={occasion}
                optionSelection={setOccasion}
              />
              <div
                className={`date-selection-box ${date ? "date-selected" : ""}`}
              >
                <input
                  className={`date-input ${date ? "date-selected-input" : ""}`}
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={handleDateChange}
                  ref={dateInputRef}
                  data-testid="date-input"
                ></input>
              </div>
              <DropdownButton
                image={<img src={OccasionIcon} />}
                options={date ? openTimes : ["Please select a date"]}
                placeholder="Time"
                selectedOption={time}
                optionSelection={setTime}
                disabled={date ? false : true}
                handleNoDateClick={handleDateClick}
              />
              <div className="input-box"></div>
              <textarea
                className={`comment-box ${isComment ? "input-complete" : ""}`}
                placeholder="Add any additional comments here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onBlur={validateComment}
              ></textarea>
            </div>
          </div>
          <div className="form-bottom">
            <div className="form-prog-btn-container">
              <button
                type="button"
                className="next-box"
                onClick={nextStep}
                disabled={!testing && (!partySize || !seating || !occasion || !date || !time)}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="form-top">
            <h3>Contact Details</h3>
            <div className="form-container">
              <label htmlFor="firstName" className="hidelabel">
                First Name:
              </label>
              <input
                className={`contact-input fullwidth-input ${
                  isValidFirstName ? "input-complete" : ""
                }`}
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name*"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <p className="form-error show-error">{errors.firstName}</p>
              <label htmlFor="lastName" className="hidelabel">
                Last Name:
              </label>
              <input
                className={`contact-input fullwidth-input ${
                  isValidLastName ? "input-complete" : ""
                }`}
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name*"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <p className="form-error show-error">{errors.lastName}</p>

              <label htmlFor="phoneNumber" className="hidelabel">
                Phone Number:
              </label>
              <input
                className={`contact-input fullwidth-input ${
                  isValidPhone ? "input-complete" : ""
                }`}
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number*"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onBlur={showDisplayPhoneError}
                required
              />
              <p className={`form-error ${
                  displayPhoneErrors ? "show-error" : ""
                }`}>{errors.phoneNumber}</p>

              <label htmlFor="email" className="hidelabel">
                Email:
              </label>
              <input
                className={`contact-input fullwidth-input ${
                  isValidEmail ? "input-complete" : ""
                }`}
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={showDisplayEmailError}
                required
              />
              <p className={`form-error ${
                  displayEmailErrors ? "show-error" : ""
                }`}>{errors.email}</p>
              <label htmlFor="subscribe" className="showlabel">
                Subscribe me to promotional emails:
              </label>
              <input
                className="checkbox"
                type="checkbox"
                id="subscribe"
                name="subscribe"
                value={subscribed}
                onChange={(e) => setSubscribed(e.target.value)}
              />
            </div>
          </div>
          <div className="form-bottom">
            <div className="your-res">
              <h6>Your Reservation</h6>
              <p>
                <strong>Occasion: </strong>
                {occasion}
              </p>
              <p>
                <strong>Seating: </strong>
                {seating}
              </p>
              <p>
                <strong>Party Size: </strong>
                {partySize}
              </p>
              <p>
                <strong>Date: </strong>
                {date}
              </p>
              <p>
                <strong>Time: </strong>
                {time}
              </p>
              <p>
                <strong>Comment: </strong>
                {comment}
              </p>
            </div>
            <div className="form-prog-btn-container">
              <button type="button" className="next-box" onClick={prevStep}>
                Back
              </button>
              <button type="submit" className="next-box submit-button"
              disabled={!isValidFirstName || !isValidLastName || !isValidPhone || !isValidEmail}>
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </form>
  );
}

export default Form;
