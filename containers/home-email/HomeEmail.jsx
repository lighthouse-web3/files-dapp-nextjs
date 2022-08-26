import React, { useRef } from "react";
import { sendEmail, validateEmail } from "../../utils/services/emailService";
import { notify } from "../../utils/services/notification";
import Styles from "./HomeEmail.module.scss";

function HomeEmail({ contentData }) {
  const mailInput = useRef();
  const subscribeEmail = () => {
    let userEmail = mailInput?.current?.value || null;
    if (validateEmail(userEmail)) {
      sendEmail(userEmail).then((res) => {
        mailInput.current.value = "";
      });
    } else {
      notify("Please Enter a valid Email", "error");
    }
  };
  return (
    <div className={Styles.HomeEmailContainer}>
      <div className={Styles.title + " section__padding"}>
        <p
          className="gradient__text mainTitle"
          style={{ marginBottom: "10px" }}
        >
          {contentData.title}
        </p>
        <div className="mainDescription section__padding">
          <p dangerouslySetInnerHTML={{ __html: contentData.description }}></p>
        </div>
        <div className={Styles.descriptionEmail}>
          <input ref={mailInput} type="text" placeholder="Enter your Email" />
          <button onClick={subscribeEmail}>{contentData.btnText}</button>
        </div>
      </div>
    </div>
  );
}

export default HomeEmail;
