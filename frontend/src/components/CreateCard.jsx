import { useState } from "react";
import axios from "axios";

export function CreateCard({ toUpdate, setToUpdate }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState([]);
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");

  return (
    <>
      <div style={{ margin: "0.3rem" }}>
        <input
          type="text"
          placeholder="name"
          style={{ marginRight: "0.3rem" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
      </div>
      <div style={{ margin: "0.3rem" }}>
        <input
          type="text"
          placeholder="type your interests"
          style={{ marginRight: "0.3rem" }}
          onChange={(e) => {
            const data = e.target.value;
            const array = data.split(",");
            setInterests([...array]);
          }}
        ></input>
        <input
          type="text"
          placeholder="linkedin"
          onChange={(e) => {
            setLinkedin(e.target.value);
          }}
        ></input>
      </div>
      <div style={{ margin: "0.3rem" }}>
        <input
          type="text"
          placeholder="twitter"
          style={{ marginRight: "0.3rem" }}
          onChange={(e) => {
            setTwitter(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            axios
              .post("http://localhost:3000/", {
                name,
                description,
                interests,
                linkedin,
                twitter,
              })
              .then((res) => {
                setToUpdate(!toUpdate);
                alert(res.data);
              });
          }}
        >
          Add Card
        </button>
      </div>
    </>
  );
}
