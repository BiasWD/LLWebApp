import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Form from "./Form.js";

const mockUpdateTimes = jest.fn();

const testing = true;

test('First Name doesnt allow invalid characters', () => {

    render(<BrowserRouter><Form openTimes={["12:00", "1:00"]} updateTimes={mockUpdateTimes} testing={testing}/></BrowserRouter>);
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);
    const input = screen.getByPlaceholderText("First Name*");
    fireEvent.change(input, { target: { value: '123' } });
    const errorText = screen.getByText("First Name must contain valid characters");
    expect(errorText).toBeInTheDocument();
})

test('First Name allows valid characters', () => {

    render(<BrowserRouter><Form openTimes={["12:00", "1:00"]} updateTimes={mockUpdateTimes} testing={testing}/></BrowserRouter>);
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);
    const input = screen.getByPlaceholderText("First Name*");
    fireEvent.change(input, { target: { value: 'Abc' } });
    const errorText = screen.queryByText("First Name must contain valid characters");
    expect(errorText).not.toBeInTheDocument();
})