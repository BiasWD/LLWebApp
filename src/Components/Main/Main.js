import Form from './Form.js'
import Aside from './Aside.js'
import { useReducer } from "react";

function Main(){

    const initializeTimes = () => {
        return ["10:00 AM", "11:00 AM", "12:00 PM",
        "1:00 PM", "2:00 PM", "3:00 PM",
        "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"]
    };

    function timesReducer(times, action) {
        switch (action.type) {
            case 'updated_times':
                return action.payload;
            default: return times;
        }
    }
    const [times, dispatch] = useReducer(timesReducer, initializeTimes());

    const updateTimes = (date) => {
        dispatch({type: 'updated_times', payload: times})};

    return(
        <main className="main-container">
            <Form openTimes={times} updateTimes={updateTimes}/>
            <Aside />
        </main>
    )
}

export default Main;