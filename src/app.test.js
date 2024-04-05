/* eslint-disable no-undef */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import App from "./App";

test("test input field for url", async ()=> {
    render(<App/>)

    const formInput = screen.getByTestId("formInput");
    const goButton = screen.getByTestId("goButton");
    const dummyUrl = "http://google.com";
    fireEvent.change(formInput, {target: {value: dummyUrl}});

    fireEvent.submit(goButton);
    const testValue= `URL: ${dummyUrl}`;
    const badTest = `URL: PizzaRules`
    // test to see if you have the url on your screen
    await screen.findByText(testValue);
    await waitFor(()=> {
        expect(screen.queryByText(testValue)).toBeInTheDocument();
        expect(screen.queryByText(badTest)).not.toBeInTheDocument();
    });
});

test("Test input field for text area", async()=> {
    render(<App />);

    const mockText = 'hello world';
    const goButton = screen.getByTestId("goButton");

    fireEvent.click(screen.getByText("PUT"));

    const inputText = screen.getByTestId('inputText');

    fireEvent.change(inputText, {target: {value: mockText}} );
    fireEvent.submit(goButton);
    const testValue = `${mockText}`;
    await screen.findByText(testValue);
    await waitFor(()=> {
        expect(screen.queryByText(testValue)).toBeInTheDocument();
    });
});