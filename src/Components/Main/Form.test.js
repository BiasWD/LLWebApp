import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Form from "./Form.js";

const mockUpdateTimes = jest.fn();

const testing = true;

test('First Name only allows valid characters', () => {

    render(<BrowserRouter><Form openTimes={["12:00", "1:00"]} updateTimes={mockUpdateTimes} testing={testing}/></BrowserRouter>);
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);
    const headingElement = screen.getByText("Contact Details");
    expect(headingElement).toBeInTheDocument();
})