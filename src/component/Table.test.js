import { render } from "@testing-library/react";

import { TableB } from "./Table";

describe("Table tests", () => {
  const data = [
    {
      file: "test2.csv",
      lines: [
        {
          file: "test2.csv",
          text: "vYISIpKVaG",
          number: 47661943,
          hex: "9999aae84d12a16846387e793eb4436c",
        },
      ],
    },
  ];

  it("Should render correctly", () => {
    const component = render(<TableB data={data} />);
    component.getByText(`${data[0].file}`);
    expect(component.container).toMatchSnapshot();
  });

  it("Should not show the data when", () => {
    const component = render(<TableB data={[]} />);
    component.getByText("There is no data!!!");
    expect(component.container).toMatchSnapshot();
  });
});
