function Form(){
    return(
        <form>
            <h3>Reservation Details</h3>
                <div className='form-container'>
                    <div className='input-box'>
                        <label for="occasion">Occasion</label>
                        <select id="occasion">
                            <option>Birthday</option>
                            <option>Engagement</option>
                            <option>Anniversiary</option>
                        </select>
                    </div>
                    <div className='input-box'></div>
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