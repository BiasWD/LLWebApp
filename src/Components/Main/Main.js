import Form from './Form.js'
import Aside from './Aside.js'
import { useReducer } from "react";

function Main(){

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const fetchTimes = (date) => {
        return fetchAPI(date);
    };

    function timesReducer(times, action) {
        switch (action.type) {
            case 'updated_times':
                return fetchTimes(action.payload);
            default: return times;
        }
    }
    const [times, dispatch] = useReducer(timesReducer, []);

    const updateTimes = (date) => {
        dispatch({type: 'updated_times', payload: date})};

    return(
        <main className="main-container">
            <Form openTimes={times} updateTimes={updateTimes}/>
            <Aside />
        </main>
    )
}

export default Main;