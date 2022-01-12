import Congrats from "./Congrats";
import { findByTestAttr } from "../test/testUtils";
import { shallow } from "enzyme";

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("Render if success pass as true", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("Should not render if success pass as false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(0);
});
