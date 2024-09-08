import DropdownButton from "../FormSelection/DropdownButton";
import OccasionIcon from  "../../images/OccasionIcon.png";

function Form(){
    return(
        <form>
            <h3>Reservation Details</h3>
                <div className='form-container'>
                    <DropdownButton image={<img src={OccasionIcon} />} options={["Anniversary", "Birthday", "Engagement"]} placeholder="Occasion"/>
                    <DropdownButton image={<img src={OccasionIcon} />} options={["Indoor", "Outdoor", "Any"]} placeholder="Seating"/>
                    <div className='input-box'></div>
                    <div className='input-box'></div>
                    <div className='input-box'></div>
                    <div className='input-box'></div>
                    <div className='comment-box'></div>
                </div>
                <div className='next-box'></div>
        </form>
    )
}

export default Form;