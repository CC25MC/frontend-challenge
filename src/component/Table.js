import Table from "react-bootstrap/Table";

export const TableB = ({ data = [] }) => {
  return (
    <Table size="sm" striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((i) => {
            return i.lines.map((item, key) => (
              <tr key={key}>
                <td>{item.file}</td>
                <td>{item.text}</td>
                <td>{item.number}</td>
                <td>{item.hex}</td>
              </tr>
            ));
          })
        ) : (
          <tr>
            <td colSpan={4} className={"text-center"}>There is no data!!!</td>
          </tr>
        )}
        {}
      </tbody>
    </Table>
  );
};
