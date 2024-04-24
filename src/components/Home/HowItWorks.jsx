/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { FaUserPlus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdFindInPage } from "react-icons/md";
import React from "react";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Embark on your journey towards opportunity's door, With a
                brushstroke of possibility, let your dreams soar. On JobZee's
                canvas, your future gleams bright, Create your account, and
                paint your career's flight.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Unlock the gateway to career's embrace, Where aspirations meet
                their destined place. Find a Job, or Post a Job anew, In the
                symphony of employment, let dreams pursue.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Seize the moment, let ambitions ignite, Apply For Job, in the
                quest for your light. Or recruit suitable candidates, with
                precision and care, In the dance of talent, find the perfect
                pair.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
