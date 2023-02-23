import React from "react";
import * as ReactDOM from "react-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Converter from "../../components/Converter";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";


describe("<Converter />", () => {

    //Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.
    beforeEach(() => {
        render(<Converter />);
    })

    //to clear everything at the end so that tests don't interrupt each other
    afterEach(() => {

    })

  test("Converter shapshot", () => {
    const container = render(<Converter/>)
    expect(container).toMatchSnapshot()
  });

  test("Should allow reverse inputs to convert by default", () => {
    expect(screen.getByLabelText('Change')).toBeInTheDocument()
    expect(screen.getByLabelText('Get')).toBeInTheDocument()
    let arrowsBtn = screen.getAllByTestId('reverse-button')[0]
    userEvent.click(arrowsBtn)
  });

  test("Should reverse currencies on arrows click when input is valid", async () => {
    expect(screen.getByDisplayValue('EUR')).toBeInTheDocument()
    expect(screen.getByDisplayValue('USD')).toBeInTheDocument()
    let changeCurrency = screen.getByDisplayValue('EUR')
    let getCurrency = screen.getByDisplayValue('USD')
    let arrowsBtn = screen.getAllByTestId('reverse-button')[0]
    userEvent.type(screen.getByLabelText('Change'), '125,50')
    expect(screen.getByLabelText('Change')).toHaveValue('125,50');
    expect(screen.queryByLabelText('Enter only numbers and comma/dot')).not.toBeInTheDocument()
    userEvent.click(arrowsBtn)
    expect(changeCurrency).toHaveValue("USD")
    expect(getCurrency).toHaveValue("EUR")
    screen.debug()
  });

  test("Field amount to convert should be invalid when enter string", () => {
    expect(screen.getByLabelText('Change')).toBeInTheDocument()
    userEvent.type(screen.getByLabelText('Change'), 'twenty five')
    expect(screen.getByLabelText('Enter only numbers and comma/dot')).toBeInTheDocument()
    expect(screen.queryByLabelText('Change')).toBeNull()
  });

  test("Field amount to convert should be valid if input is integer", async () => {
    expect(screen.getByLabelText('Change')).toBeInTheDocument()
    userEvent.type(screen.getByLabelText('Change'), '1000')
    expect(screen.queryByLabelText('Enter only numbers and comma/dot')).toBeNull()
    expect(screen.queryByLabelText('Change')).toBeInTheDocument()
  });

  test("Field amount to convert should be valid if input is double", async () => {
    expect(screen.getByLabelText('Change')).toBeInTheDocument()
    userEvent.type(screen.getByLabelText('Change'), '25,89')
    expect(screen.queryByLabelText('Enter only numbers and comma/dot')).toBeNull()
    expect(screen.queryByLabelText('Change')).toBeInTheDocument()
  });
});