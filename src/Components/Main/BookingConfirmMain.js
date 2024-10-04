import ContactUsButton from "./ContactUsButton";
import BackToHome from "../../images/BackToHome.png"
import "./BookingConfirmedMain.css";
import { Link } from 'react-router-dom';

function BookingConfirmedMain() {
    return(
        <section className="booking-confirmed">
        <div className="confirmed-div">
        <h1 className="green-heading">Thank You</h1>
        <h3 className="booking-confirmed-text">
            Your reservation has been confirmed.
        </h3>
        <p className="booking-confirmed-text" style={{fontSize:'1.2rem'}}>
            An email has also been sent with your reservation details.
        </p>
        <Link to="/">
        <img src={BackToHome} alt="Back To Home"></img>
        </Link>
        </div>
                <div>
                    <h5>Reservation Policy</h5>
                    <p style={{padding:'1rem'}}>Cancellations are free up to 24 hours before your reservation. Late cancellations will incur a 50% fee, and no-shows will be charged the full amount. Please arrive at least 10 minutes early; reservations will be held for up to 15 minutes past the scheduled time.</p>
                </div>
        </section>
    )
}

export default BookingConfirmedMain;