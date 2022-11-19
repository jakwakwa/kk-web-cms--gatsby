import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { contactBg, contact } from "../../styles/layout.module.css"

const Contact = () => {
  return (
    <>
      <div id="contact" className={contact}>
        <div>
          <h1>{`Contact Us`}</h1>
          <p>{`Fill in the form below if you want us to contact you`}</p>
          <div>
            <label>Name:</label>
            <input />
          </div>
          <div>
            <label>Email: </label>
            <input />
          </div>
          <div>
            <label>Phone: </label>
            <input />

            <button>Send</button>
          </div>

          <h3>{`Contact Detials`}</h3>
          <p>
            <span>Tel:</span> +27 (0)11 555 12334
          </p>
          <p>
            <span>Email:</span> domain@com
          </p>
          <p style={{ maxWidth: "300px" }}>
            <span style={{ display: "block", marginTop: "10px" }}>
              Address:
            </span>
            Icon Building, 24 Hans Strijdom Ave, Floors 1 - 6, Johannesburg,
            8000, South Africa.
          </p>
        </div>

        <div className={contactBg}></div>
      </div>
    </>
  )
}

export default Contact
