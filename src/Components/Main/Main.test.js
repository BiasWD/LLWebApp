import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main.js";

test('Renders the form heading', ()=> {
    render(<BrowserRouter><Main /></BrowserRouter>);
    const headingElement = screen.getByText("Reservation Details");
    expect(headingElement).toBeInTheDocument();
})

test('No available times display when a date is not selected', ()=> {
    render(<BrowserRouter><Main /></BrowserRouter>);
    const timeInput = screen.getByText("Time");
    fireEvent.click(timeInput);
    const noTimes = screen.getByText("Please select a date")
    expect(noTimes).toBeInTheDocument();
})

test('Available times display when a date is selected. Update times is called.', () => {
    render(<BrowserRouter><Main /></BrowserRouter>);

    const timeInput = screen.getByText("Time");
    const dateInput = screen.getByTestId("date-input");
    fireEvent.change(dateInput, { target: { value: '2024-01-01' } });
    fireEvent.click(timeInput);
    const firstTime = screen.getByText("17:00");
    expect(firstTime).toBeInTheDocument();
})