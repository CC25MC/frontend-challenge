import { render } from "@testing-library/react";

import { NavbarB } from "./Navbar";

describe("Navbar tests", () => {
  const filesError = [
    {
      file: "test18.csv",
      error: "not found",
    },
  ];
  const title = "Test Challenge";

  it("Should render correctly", () => {
    const component = render(<NavbarB title={title} filesError={filesError} />);
    component.getByText(`${title}`);
    expect(component.container).toMatchSnapshot();
  });

  it("Should show the error notification", () => {
    const component = render(
      <NavbarB title={"Test Challenge"} filesError={filesError} />
    );
    component.getByText(`${filesError.length} Notifications`);
    expect(component.container).toMatchSnapshot();
  });
});
