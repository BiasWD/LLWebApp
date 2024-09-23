import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Form from "./Form.js";

test('Renders the form heading', ()=> {
    render(<BrowserRouter><Form /></BrowserRouter>);
    const headingElement = screen.getByText("Reservation Details");
    expect(headingElement).toBeInTheDocument();
})