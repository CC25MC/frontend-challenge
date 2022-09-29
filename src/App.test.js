import { render } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    component.getByText("Full Stack Challenge");
    expect(component.container).toMatchSnapshot();
  });
});

