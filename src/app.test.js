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
    })
})