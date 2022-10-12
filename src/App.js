import { useEffect } from "react";
import { NavbarB, TableB } from "./component";
import { useDispatch, useSelector } from "react-redux";
import { getFiles, getListFiles, getFile, setFile } from "./redux/slices";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const App = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    dataFiles = [],
    error = [],
    files = [],
    file,
    serverStatus,
  } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(getFiles());
    dispatch(getListFiles());
  }, [dispatch]);
  
  return (
    <>
      <NavbarB title="Full Stack Challenge" filesError={error} />
      <div className="mt-4 px-5">
        {serverStatus === "INACTIVE" && (
          <Alert variant={"danger"}>
            The server is off, turn it on to test it.
          </Alert>
        )}

        <Form.Select
          aria-label="selec file"
          value={file}
          onChange={(e) => {
            dispatch(setFile(e.target.value));
            dispatch(getFile(e.target.value));
          }}
        >
          <option value={"All"}>All</option>

          {files.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
        <div className="mt-3" />

        {isLoading ? (
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "80vh",
            }}
          >
            <Spinner animation="grow" />
          </div>
        ) : (
          <TableB data={dataFiles} />
        )}
      </div>
    </>
  );
};

export default App;
