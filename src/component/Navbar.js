import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Fragment } from "react";

export const NavbarB = ({ title, filesError = [] }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>{title}</Navbar.Brand>
        {filesError.length > 0 && (
          <Fragment>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                  {filesError.length} Notifications
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {filesError.map((item, key) => (
                    <Dropdown.Item key={key}>
                      {item?.file} - {item?.error}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          </Fragment>
        )}
      </Container>
    </Navbar>
  );
};
