import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);

const findTestAttribute = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

test("Render without errors", () => {
  const wrapper = setup();
  const appComponent = findTestAttribute(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("Render Increment button", () => {
  const wrapper = setup();
  const buttonComponent = findTestAttribute(
    wrapper,
    "component-button-increment"
  );
  expect(buttonComponent.length).toBe(1);
});

test("Render counter text", () => {
  const wrapper = setup();
  const counterTextComponent = findTestAttribute(wrapper, "counter-display");
  expect(counterTextComponent.length).toBe(1);
});

test("Check if initial counter value is 0", () => {
  const wrapper = setup();
  const counterValueText = findTestAttribute(wrapper, "counter-value").text();
  expect(counterValueText).toBe("0");
});

test("Check if clicking on button increment the count", () => {
  const wrapper = setup();
  //find the button
  const buttonComponent = findTestAttribute(
    wrapper,
    "component-button-increment"
  );
  // Click the button
  buttonComponent.simulate("click");
  //find the counter value
  const counterValueText = findTestAttribute(wrapper, "counter-value").text();
  //check if it is incrementd
  expect(counterValueText).toBe("1");
});

test("Render Decrement button", () => {
  const wrapper = setup();
  const buttonComponent = findTestAttribute(
    wrapper,
    "component-button-decrement"
  );
  expect(buttonComponent.length).toBe(1);
});

test("Check if clicking on button decrement the count", () => {
  const wrapper = setup();
  //find the increment button
  const buttonComponentIncrement = findTestAttribute(
    wrapper,
    "component-button-increment"
  );
  // Click the button
  buttonComponentIncrement.simulate("click");
  //find the counter value
  const counterValueTextInc = findTestAttribute(
    wrapper,
    "counter-value"
  ).text();
  //check if it is incrementd
  expect(counterValueTextInc).toBe("1");
  //find the decrement button
  const buttonComponentDecrement = findTestAttribute(
    wrapper,
    "component-button-decrement"
  );
  // Click the button
  buttonComponentDecrement.simulate("click");
  //find the counter value
  const counterValueTextDec = findTestAttribute(
    wrapper,
    "counter-value"
  ).text();
  //check if it is incrementd
  expect(counterValueTextDec).toBe("0");
});

test("error does not show when not needed", () => {
  const wrapper = setup();
  const errorDiv = findTestAttribute(wrapper, "error-message");
  // Check if that wrapper has some class
  const errorHasHidenClass = errorDiv.hasClass("hidden");
  expect(errorHasHidenClass).toBe(true);
});

test("error shoud show when needed", () => {
  const wrapper = setup();
  //find the decrement button
  const buttonComponentDecrement = findTestAttribute(
    wrapper,
    "component-button-decrement"
  );
  // Click the button
  buttonComponentDecrement.simulate("click");
  //find error dev
  const errorDiv = findTestAttribute(wrapper, "error-message");
  // Check if that wrapper has some class
  const errorHasHidenClass = errorDiv.hasClass("hidden");
  expect(errorHasHidenClass).toBe(false);
});

test("Check if increment button removes the error", () => {
  const wrapper = setup();
  //find the decrement button
  const buttonComponentDecrement = findTestAttribute(
    wrapper,
    "component-button-decrement"
  );
  // Click the button
  buttonComponentDecrement.simulate("click");
  //find the increment button
  const buttonComponentIncrement = findTestAttribute(
    wrapper,
    "component-button-increment"
  );
  // Click the button
  buttonComponentIncrement.simulate("click");
  //find error dev
  const errorDiv = findTestAttribute(wrapper, "error-message");
  // Check if that wrapper has some class
  const errorHasHidenClass = errorDiv.hasClass("hidden");
  expect(errorHasHidenClass).toBe(true);
});
