import React from "react";
import styles from "../components/Voteformstyles.module.css";
import { useState } from "react";
import axios from "axios";
export default function Voteform() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const datas = {
      Name,
      Email,
    };
    console.log(datas);
    try {
      // const {info} = await axios ({
      //     url: "/api/datasend",
      //     method: "POST",
      //     data: datas,
      // })
      // console.log("res back", info)

      axios.post("http://localhost:3000/api/datasend", datas).then((result) => {
        console.log("here is the res", result.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <h1 className={styles.head}>Please VOTE here!</h1>
        <form>
          <div className={styles.section}>
            <input
              type="text"
              placeholder="Name"
              onChange={({ target }) => setName(target?.value)}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="ADDU Email"
              onChange={({ target }) => setEmail(target?.value)}
              className={styles.input}
            />

            <h3 className={styles.text}>
              Do you agree bla bla bla lorem chuchu pat lami hjdhsouiasbuiabs
            </h3>
            <div class={styles.radio}>
              Yes{" "}
              <input
                type="radio"
                name="choice"
                id=""
                className={styles.rinput}
              />
              No{" "}
              <input
                type="radio"
                name="choice"
                id=""
                className={styles.linput}
              />
            </div>
            <input
              type="submit"
              value="Submit"
              onClick={handleSubmit}
              className={styles.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
