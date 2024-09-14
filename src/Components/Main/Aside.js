import cake from '../../images/lemon dessert.jpg'
import ContactUsButton from './ContactUsButton';

function Aside() {
    return (
        <aside>
            <div className="aside-divs">
                <div>
                    <h5>Reservation Policy</h5>
                    <p>Cancellations are free up to 24 hours before your reservation. Late cancellations will incur a 50% fee, and no-shows will be charged the full amount. Please arrive at least 10 minutes early; reservations will be held for up to 15 minutes past the scheduled time.</p>
                </div>
                <ContactUsButton />
                <div>
                    <h6>Location</h6>
                    <p>Little Lemon Restaurant<br></br>1234 Citrus Avenue<br></br>Chicago, IL 60607</p>
                </div>
            </div>
            <img className="aside-img"
                src={cake}
                alt="Little Lemon Logo"
            />
        </aside>
    )
}

export default Aside;