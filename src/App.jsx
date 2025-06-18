// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import "./App.css";
import { React, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");
  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
  };
  const handleReset = () => {
    setFirstName("rohit"),
      setLastName(""),
      setEmail(""),
      setContact(""),
      setAbout(""),
      setGender("male"),
      setSubjects({
        english: true,
        maths: false,
        physics: false,
      });
    setResume("");
    setUrl("");
    setSelectedOption("");
  };
  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
            required
          />
          <label for="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <label for="tel">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />
          <label for="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <label for="lang">your best subject</label>
          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subjects.english === true}
            onChange={(e) => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subjects.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subjects.physics === true}
            onChange={(e) => handleSubjectChange("physics")}
          />
          Physics
          <label for="file">Upload resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Upload file here"
            required
          />
          <label for="url">Enter URL*</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter url"
            required
          />
          <label>Select Your choice</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled selected={selectedOption === ""}>
              Select your ans
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">MongoDB</option>
            </optgroup>
          </select>
          <label for="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About your self"
            required
          ></textarea>
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
