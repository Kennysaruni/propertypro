import React from "react";
import "./Lease.css";

function Lease() {
  return (
    <div className="lease-container">
      <h1 className="lease-agreement">Lease Agreement </h1>
      <p className="unit">Unit number 1234</p>
      <p className="signed-on">Signed on 21st September 2023</p>
      <div className="terms-and-conditions">
        <p className="terms-title">Terms and Conditions</p>
        <p className="terms-text">
          This lease agreement ("The agreement") is entered into by and between
          the undersigned lessor and lesee (the "Parties") for the lease of real
          property located at ,The Waterfront, Karen. The parties agree to abide
          by the following terms and conditions:
        </p>
      </div>
      <div className="payment-schedule">
        <h1 className="terms-title">Payment Schedule</h1>
        <p className="terms-text">
          Rent payment should be made on the 5th of each month, failure to do so
          will result in a penalty of Ksh 200 everyday thereafter in addition to
          the rent.
        </p>
      </div>
      <div className="special-provisions">
        <h1 className="terms-title">Special provisions</h1>
        <ol>
          <li>
            <p className="terms-text">
              1. For the peace and serenity of the property, no loud
              music/sounds should be played past 10:00 pm or before 9:00 am
            </p>
          </li>
          <li>
            <p className="terms-text">
              2. In the event that you wish to terminate your lease before the
              agreed date, the property manager should be advised on it two
              weeks prior to the date of your moving.
            </p>
          </li>
          <li>
            <p className="terms-text">
              3. There is no refund for rent paid, no matter how long, therefore
              you are required to stay until you finish the length paid for.
            </p>
          </li>
        </ol>
      </div>
        <p className="note-better">
          The organization reserves the right to alter the terms therein as it
          sees fit, if the change happens, the tenants should be notified.
        </p>

        <div className="buttons">
            <buttons className="print">Print</buttons>
            <buttons className="download">Download</buttons>
        </div>
    </div>
  );
}

export default Lease;
