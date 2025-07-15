import { useEffect, useState } from "react";
import styles from "./queryform.module.css";
import { saveAs } from "file-saver";

function QueryForm() {
  const [eicNumber, setEicNumber] = useState("");
  const [crNumber, setCrNumber] = useState("");
  const [applicationNumber, setApplicationNumber] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);
  useEffect(() => {}, [fetchData]);

  const handleReset = () => {
    setEicNumber("");
    setCrNumber("");
    setApplicationNumber("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(
      `http://localhost:5555/api/v1/visa?eicNumber=${eicNumber}&crNumber=${crNumber}`
    )
      .then((res) => res.json())
      .then((data) => setFetchData(data))
      .catch((err) => setError(err));
    setIsLoading(false);
    setEicNumber("");
    setCrNumber("");
    setApplicationNumber("");
  };
  console.log(fetchData);
  console.log(fetchData.length);
  const downloadImage = () => {
    saveAs("http://localhost:5555/person_details.jpeg", "image.jpeg"); // Put your image URL here.
  };

  return (
    <div>
      <form className={styles.form}>
        <div className={styles.formTop}>
          <div className={styles.box}>
            <label htmlFor="eic_number">Employer Identification Card No.</label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                name="eic_number"
                value={eicNumber}
                onChange={(e) => setEicNumber(e.target.value)}
              />
              <p>( Format Example : 999999-99-9999 )</p>
            </div>
          </div>
          <p style={{ margin: "0 30px" }}>OR</p>
          <div className={styles.box}>
            <label htmlFor="cr_number">Company Registration No.</label>
            <input
              type="text"
              name="cr_number"
              value={crNumber}
              onChange={(e) => setCrNumber(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.box}>
          <label htmlFor="application_number">Application Number</label>
          <input
            type="text"
            name="application_number"
            value={applicationNumber}
            onChange={(e) => setApplicationNumber(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSearch} type="submit">
            Search
          </button>
          <button onClick={handleReset}>RESET </button>
        </div>
      </form>
      {error ? (
        <p style={{ textAlign: "center", padding: "10px", color: "red" }}>
          {error}
        </p>
      ) : (
        <table
          className={styles.table}
          align="center"
          border="0"
          bgcolor="#F4F4FF"
        >
          <thead className={styles.thead}>
            <tr className="subheader">
              <td>No</td>
              <td>Application Number</td>
              <td>
                Employer Identification Card No. / Company Registration No.
              </td>
              <td>Maid Name/Employee</td>
              <td>Document Number</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {fetchData.length > 0 ? (
              fetchData?.map((item, i) => (
                <tr key={item?._id}>
                  <td>{i}</td>
                  <td
                    onClick={() => setIsModelOpen(true)}
                    style={{
                      textDecoration: "underline",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    {item?.eicNumber}
                  </td>
                  <td>{item?.crNumber}</td>
                  <td>{item?.applicationNumber}</td>
                  <td>{item?.maidName}</td>
                  <td>{item?.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} style={{ textAlign: "center" }}>
                  {isLoading
                    ? "Please wait data is loading..."
                    : "Data not available!"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      <div>
        {isModelOpen && (
          <div className={styles.model}>
            <div
              onClick={() => setIsModelOpen(false)}
              className={styles.closeBackground}
            ></div>
            <img
              src="/person_details.jpeg"
              alt="person visa details"
              width={500}
              height={600}
              className={styles.modelImg}
            />
            <div className={styles.closeBtn}>
              <button onClick={() => setIsModelOpen(false)}>X</button>
              <button onClick={() => window.print()}>Print</button>
              <button onClick={downloadImage}>Download!</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QueryForm;
