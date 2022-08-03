import React, { useRef, useState } from "react";
import "./ProfileForm.css";
import { Link, useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const [isValidEmail, setisValidEmail] = useState(true)
  const [describeField, setDescribeField] = useState([0, 0, 0, 0, 0])
  const [level, setLevel] = useState([0, 0, 0, 0])

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    city: "",
    twitter: "",
    discord: "",
    description: "",
    experience: "",
    interests: "",
    reason: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail) return false
    console.log(formValue);
    saveData()
    navigate("/enrollment");
  };

  const saveData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      profileData: {
        ...formValue
      }
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://web3bharat.herokuapp.com/api/add", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }
  const handleChangeField = (e, index, value) => {
    debugger
    if (e.target.name == 'describes')
      checkboxValidate(e, index, setDescribeField, value)
    else if (e.target.name == 'level') checkboxValidate(e, index, setLevel, e.target.value)
    // console.log(e, level);
    formValue[e.target.name] = e.target.value;
    setFormValue(formValue)
    // debugger
    console.log(formValue, "ewf3");
    validations(e)



  }
  const checkboxValidate = (e, index, field, value) => {
    let i = [0, 0, 0, 0, 0]
    i[index] = 1
    field(i)
    e.target.value = value
    // level
  }


  const validations = (e) => {
    if (e.target.name == 'email') {
      let t = e.target.value;
      if (t.includes('@') && t.includes('.')) return setisValidEmail(true)
      else setisValidEmail(false)
    }
    else if (e.target.name == 'twitter') {
      if (e.target.value[0] != '@') {
        formValue[e.target.name] = e.target.value
        e.target.value = '@' + e.target.value
      }
    }
    // else if ()

  }



  return (
    <>
      <div className="profile-form-background">
        <div className="profile-form-container">
          <div className="profile-form-header">
            <h2 className="profile-form-header-1">Create Your Web3Bharat</h2>
            <h2 className="profile-form-header-2">Member Profile</h2>
          </div>
          <form onSubmit={handleSubmit} autocomplete="off">
            <div>
              <p className="profile-form-sub-header">Personal Details</p>
              <div className="profile-form-input-container">
                <div>
                  <label className="profile-form-label">Name*</label>
                  <input
                    className="profile-form-input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={(e) => handleChangeField(e)}
                    required
                  />
                </div>
                <div>
                  <label className="profile-form-label">Email*</label>
                  <input
                    className="profile-form-input"
                    type="text"
                    placeholder="Email Id"
                    required
                    name="email"
                    onChange={(e) => handleChangeField(e)}
                  />

                  {!isValidEmail && <span className="error-span">Please enter a valid Email</span>}
                </div>
                <div>
                  <label className="profile-form-label">City*</label>
                  <input
                    className="profile-form-input"
                    type="text"
                    placeholder="Select City"
                    required
                    name="city"
                    onChange={(e) => handleChangeField(e)}
                  />
                </div>
                <div>
                  <label className="profile-form-label">Twitter Handle*</label>
                  <input
                    className="profile-form-input"
                    type="text"
                    placeholder="Twitter Handle"
                    required
                    name="twitter"
                    onChange={(e) => handleChangeField(e)}
                  />
                </div>
                <div>
                  <label className="profile-form-label">Discord Id*</label>
                  <input
                    className="profile-form-input"
                    type="text"
                    placeholder="Discord Id"
                    required
                    name="discord"
                    onChange={(e) => handleChangeField(e)}
                  />
                </div>
              </div>
            </div>

            <hr className="form-horizontal-rule" />

            <div>
              <p className="profile-form-sub-header">
                What describes you best?
              </p>
              <div className="describes-you-container">
                <div className="describes-you">
                  <label class="container">
                    <input type="checkbox" checked={describeField[0]} name="describes" onChange={(e) => { handleChangeField(e, 0, 'School Student') }} />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">School Student</label>
                  <input
                    className="describes-you-input"
                    type="text"
                    placeholder="School Name"
                    name="describeValue"
                    onChange={(e) => handleChangeField(e)}
                  />
                </div>

                <div className="describes-you">
                  <label class="container">
                    <input type="checkbox" checked={describeField[1]} name="describes" onChange={(e) => { handleChangeField(e, 1, 'Professional') }} />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">Professional</label>
                  <input
                    className="describes-you-input"
                    type="text"
                    placeholder="Company Name"
                    name="describeValue"
                    onChange={(e) => handleChangeField(e)}

                  />
                </div>
                <div className="describes-you">
                  <label class="container">
                    <input type="checkbox" checked={describeField[2]} name="describes" onChange={(e) => { handleChangeField(e, 2, 'College Student') }} />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">College Student</label>
                  <input
                    className="describes-you-input"
                    type="text"
                    placeholder="College Name"
                    name="describeValue"
                    onChange={(e) => handleChangeField(e)}
                  />
                </div>
                <div className="describes-you">
                  <label class="container">
                    <input type="checkbox" checked={describeField[3]} name="describes" onChange={(e) => { handleChangeField(e, 3, 'Founder') }} />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">Founder</label>
                  <input
                    className="describes-you-input"
                    type="text"
                    placeholder="Company Name"
                    name="describeValue"
                    onChange={(e) => handleChangeField(e)}
                  />
                </div>
                <div className="describes-you">
                  <label class="container">
                    <input type="checkbox" checked={describeField[4]} name="describes" onChange={(e) => { handleChangeField(e, 4, 'Other') }} />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">Other</label>
                  <input
                    className="describes-you-input"
                    type="text"
                    placeholder="Other"
                    name="describeValue"
                    onChange={(e) => handleChangeField(e)}
                  />
                </div>
              </div>
            </div>

            <hr className="form-horizontal-rule" />

            <div>
              <p className="profile-form-sub-header">
                Experience level in Web3
              </p>
              <div className="experience-level-container">
                <div className="experience-level">
                  <label class="container">
                    <input type="checkbox"
                      name="level"
                      value={"New"}
                      onChange={(e) => handleChangeField(e, 0)} checked={level[0]} />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">New to Web3</label>
                </div>
                <div className="experience-level">
                  <label class="container">
                    <input type="checkbox" name="level"
                      value={"0-1"}
                      onChange={(e) => handleChangeField(e, 1)} checked={level[1]} />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">6 Months Exp.</label>
                </div>
                <div className="experience-level">
                  <label class="container">
                    <input type="checkbox" name="level"
                      value={"1-2"}
                      onChange={(e) => handleChangeField(e, 2)} checked={level[2]} />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">1-2 Years Exp.</label>
                </div>
                <div className="experience-level">
                  <label class="container">
                    <input type="checkbox" name="level"
                      value={"2+"}
                      onChange={(e) => handleChangeField(e, 3)} checked={level[3]} />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">2+ Years Exp.</label>
                </div>
              </div>
            </div>

            <hr className="form-horizontal-rule" />

            <div>
              <p className="profile-form-sub-header">
                What interests you most?
              </p>
              <div>
                <select
                  className="interests-dropdown"
                  name="interests"
                  id="interests"
                  onChange={(e) => handleChangeField(e, 1, "132")}
                >
                  <option value="">Select your Interest</option>
                  <option value="technology">Technology</option>
                  <option value="designing">Designing</option>
                  <option value="marketing">Marketing</option>
                  <option value="contentCreation">Content Creation</option>
                </select>
              </div>
            </div>

            <hr className="form-horizontal-rule" />

            <div>
              <p className="profile-form-sub-header">
                Reason to Join this Community?
              </p>
              <div className="reasons-container">
                <div className="reason">
                  <label class="container">
                    <input type="checkbox"
                      name="reason"
                      onChange={(e) => handleChangeField(e)} />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">
                    To Learn and Up-skill in web3{" "}
                  </label>
                </div>
                <div className="reason">
                  <label class="container">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">
                    To network with like minded folks
                  </label>
                </div>
                <div className="reason">
                  <label class="container">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">
                    Looking for opportunity (internship/job/projects)
                  </label>
                </div>
                <div className="reason">
                  <label class="container">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label className="profile-form-label">
                    Looking for funding a startup/business idea
                  </label>
                </div>
              </div>
              <div>
                <button type="submit" className="profile-form-button">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
