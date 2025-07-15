import QueryForm from "../query-form/QueryForm";
import styles from "./maincontent.module.css";

const data = [
  {
    id: 1,
    title: "APPLICATION RECEIVED",
    seperator: "-",
    description: "Application is received.",
  },
  {
    id: 2,
    title: "NEW",
    seperator: "-",
    description:
      "Application has been received and are being processed by the Immigration Department of Malaysia.Please send the original copy of supporting documents if still not do so.",
  },
  {
    id: 3,
    title: "APPROVE",
    seperator: "-",
    description:
      "Application has been approved by the Immigration Department of Malaysia and is ready for Payment and print",
  },
  {
    id: 4,
    title: "STICKERS",
    seperator: "-",
    description: "Please make the FOMEMA check up if still not do so.",
  },
  {
    id: 5,
    title: "REJECT",
    seperator: "-",
    description:
      "Application has been rejected by the Immigration Department of Malaysia.",
  },
  {
    id: 6,
    title: "CANCEL",
    seperator: "-",
    description:
      "Application has been canceled by the Immigration Department of Malaysia.",
  },
  {
    id: 7,
    title: "PAY",
    seperator: "-",
    description: "Application has been paid and ready to print Stickers.",
  },
  {
    id: 8,
    title: "PRINT",
    seperator: "-",
    description: "Stickers have been printed and ready to be collected.",
  },
  {
    id: 9,
    title: "POSTPONE",
    seperator: "-",
    description:
      "Application has been postponed by the Immigration Department of Malaysia.",
  },
];

function MainContent() {
  return (
    <div className={styles.main_conatiner}>
      <div className={styles.wrapper}>
        <p className={styles.heading_1}>
          APPLICATION STATUS FOR FOREIGN MAIDS / FOREIGN WORKERS
        </p>
        <div className={styles.text}>
          <span>Status:</span>
          <table>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td width={"20%"}>{item.title}</td>
                  <td width={"5%"}>{item.seperator}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <QueryForm />
      </div>
    </div>
  );
}

export default MainContent;
