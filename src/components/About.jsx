import gifi from "../assets/giphy.gif";
import { BiSolidHandRight } from "react-icons/bi";
import "./About.css";
import { useState } from "react";


const About = () => {
  const [hoverColor, onHoverColor] = useState("purple");
  return (
    <div id="about">
      <div className="row">
        <div className="about-desc">
          <h1 className="kwi">
            Know Who <span className="purple">I'M</span>
          </h1>
          <p>
            Hi Everyone, I am Pranavesh from Avadi, India.<br></br>I am 
            pursuing Btech IT.
          </p>
          <p>Apart from coding, some other activities that I love to do!</p>
          <ul
            style={{
              color: "white",
              listStyleType: "none",
              marginTop: "20px",
              fontSize: "1.2rem",
            }}
          >
            <li>
              <span>
                <BiSolidHandRight />
              </span>
              Cricket
            </li>
            <li>
              <span>
                <BiSolidHandRight />
              </span>
              Gaming
            </li>
            <li>
              <span>
                <BiSolidHandRight />
              </span>
              Reading Books
            </li>
          </ul>
          <p className="purple">
            "The only way to do great work is to love <br /> what you do and
            give it everything you've got." <br /> - Steve Jobs
          </p>
        </div>
        <div className="penguin-div">
          <img src={gifi} />
        </div>
      </div>
      <div className="proffesional">
        <div className="proffesional-title">
          <h1 className="heading" style={{ fontWeight: "bold" }}>
            Professional{" "}
            <strong
              className="purple text-color"
              style={{ color: hoverColor, fontWeight: "bold" }}
            >
              Skillset
            </strong>
          </h1>
        </div>
        <div className="tech-icons-mainn">
          <a
            className="tech-icons cpp"
          >
            <div
              onMouseEnter={() => {
                onHoverColor("skyblue");
              }}
              onMouseLeave={() => {
                onHoverColor("purple");
              }}
            >
              <svg
                stroke="currentColor"
                fill="blue"
                viewBox="0 0 24 24"
                height="4em"
                width="4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="hover-fill"
                  d="M12.207 16.278C11.1241 17.343 9.63879 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6C9.67492 6 11.1896 6.6863 12.278 7.79303L13.6923 6.37878C12.2418 4.91014 10.2272 4 8 4C3.58172 4 0 7.58172 0 12C0 16.4183 3.58172 20 8 20C10.1911 20 12.1764 19.1192 13.6212 17.6923L12.207 16.278Z"
                  fill="white"
                ></path>
                <path
                  className="hover-fill"
                  d="M15 9H13V11H11V13H13V15H15V13H17V11H15V9Z"
                  fill="white"
                ></path>
                <path
                  className="hover-fill"
                  d="M20 9H22V11H24V13H22V15H20V13H18V11H20V9Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </a>

          <a
            className="tech-icons react"
          >
            <div
              onMouseEnter={() => {
                onHoverColor("#00D8FF");
              }}
              onMouseLeave={() => {
                onHoverColor("purple");
              }}
            >
              <svg
                stroke="currentColor"
                fill="white"
                stroke-width="0"
                version="1.1"
                viewBox="0 0 34 32"
                height="4em"
                width="4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"></path>
                <path d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"></path>
              </svg>
            </div>
          </a>
          <a href="" className="tech-icons node">
            <div
              onMouseEnter={() => {
                onHoverColor("#026e00");
              }}
              onMouseLeave={() => {
                onHoverColor("purple");
              }}
            >
              <svg
                stroke="currentColor"
                fill="white"
                stroke-width="0"
                version="1.1"
                viewBox="0 0 32 32"
                height="4em"
                width="4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.304 16.563c0-0.095-0.050-0.183-0.132-0.23l-2.192-1.261c-0.037-0.022-0.079-0.033-0.121-0.035-0.004 0-0.020 0-0.023 0-0.042 0.002-0.083 0.013-0.121 0.035l-2.191 1.261c-0.082 0.047-0.133 0.135-0.133 0.23l0.005 3.396c0 0.047 0.025 0.091 0.066 0.114 0.041 0.024 0.091 0.024 0.132 0l1.302-0.746c0.082-0.049 0.132-0.135 0.132-0.23v-1.587c0-0.094 0.050-0.182 0.132-0.229l0.555-0.319c0.041-0.024 0.086-0.035 0.133-0.035 0.045 0 0.091 0.012 0.132 0.035l0.554 0.319c0.082 0.047 0.132 0.135 0.132 0.229v1.587c0 0.095 0.051 0.181 0.133 0.23l1.302 0.746c0.041 0.024 0.092 0.024 0.132 0 0.040-0.023 0.066-0.067 0.066-0.114l0.004-3.396zM17.006 11.894c-0.041-0.023-0.091-0.022-0.131 0.002s-0.065 0.067-0.065 0.114v3.363c0 0.033-0.018 0.064-0.046 0.080s-0.064 0.017-0.093 0l-0.549-0.316c-0.082-0.047-0.183-0.047-0.265 0l-2.192 1.265c-0.082 0.047-0.133 0.135-0.133 0.229v2.531c0 0.095 0.050 0.182 0.132 0.229l2.192 1.266c0.082 0.047 0.183 0.047 0.265 0l2.193-1.266c0.082-0.048 0.132-0.135 0.132-0.229v-6.309c0-0.096-0.052-0.184-0.136-0.231l-1.305-0.728zM16.803 18.331c0 0.024-0.012 0.046-0.033 0.057l-0.753 0.434c-0.020 0.012-0.046 0.012-0.066 0l-0.753-0.434c-0.021-0.012-0.033-0.034-0.033-0.057v-0.869c0-0.024 0.013-0.046 0.033-0.057l0.753-0.435c0.020-0.012 0.046-0.012 0.066 0l0.753 0.435c0.020 0.012 0.033 0.034 0.033 0.057v0.869zM24.85 17.439c0.081-0.047 0.132-0.134 0.132-0.229v-0.613c0-0.095-0.050-0.181-0.132-0.229l-2.178-1.265c-0.082-0.048-0.183-0.048-0.265-0l-2.192 1.265c-0.082 0.047-0.132 0.135-0.132 0.229v2.53c0 0.095 0.051 0.183 0.134 0.23l2.178 1.241c0.080 0.046 0.179 0.046 0.26 0.001l1.317-0.732c0.041-0.023 0.067-0.067 0.068-0.115s-0.025-0.092-0.066-0.116l-2.206-1.266c-0.041-0.023-0.066-0.067-0.066-0.115v-0.793c0-0.047 0.025-0.091 0.066-0.115l0.687-0.395c0.041-0.023 0.091-0.023 0.132 0l0.687 0.395c0.041 0.024 0.066 0.067 0.066 0.115v0.624c0 0.047 0.025 0.091 0.066 0.115s0.092 0.023 0.133-0l1.312-0.763zM9.291 15.090c0.082-0.047 0.183-0.047 0.265 0l2.192 1.265c0.082 0.047 0.132 0.134 0.132 0.229v2.532c0 0.095-0.051 0.182-0.132 0.229l-2.192 1.266c-0.082 0.047-0.183 0.047-0.265 0l-2.192-1.266c-0.082-0.047-0.132-0.135-0.132-0.229v-2.532c0-0.095 0.050-0.182 0.132-0.229l2.192-1.265zM29.106 20.647c-0.075 0-0.151-0.020-0.217-0.058l-0.69-0.408c-0.103-0.058-0.052-0.078-0.019-0.090 0.137-0.048 0.165-0.059 0.312-0.142 0.015-0.009 0.036-0.005 0.052 0.004l0.53 0.315c0.019 0.011 0.046 0.011 0.064 0l2.067-1.193c0.019-0.011 0.031-0.033 0.031-0.056v-2.386c0-0.023-0.012-0.045-0.032-0.057l-2.066-1.192c-0.019-0.011-0.045-0.011-0.064 0l-2.066 1.192c-0.020 0.011-0.033 0.034-0.033 0.057v2.386c0 0.023 0.013 0.044 0.032 0.055l0.566 0.327c0.307 0.154 0.495-0.027 0.495-0.209v-2.355c0-0.033 0.027-0.059 0.060-0.059h0.262c0.033 0 0.060 0.026 0.060 0.059v2.355c0 0.41-0.223 0.645-0.612 0.645-0.119 0-0.214 0-0.476-0.129l-0.542-0.312c-0.134-0.077-0.217-0.222-0.217-0.377v-2.386c0-0.155 0.083-0.3 0.217-0.377l2.067-1.194c0.131-0.074 0.305-0.074 0.434 0l2.067 1.194c0.134 0.077 0.217 0.222 0.217 0.377v2.386c0 0.155-0.083 0.299-0.217 0.377l-2.067 1.193c-0.066 0.038-0.141 0.058-0.218 0.058zM29.745 19.004c-0.905 0-1.094-0.415-1.094-0.764 0-0.033 0.026-0.059 0.060-0.059h0.267c0.030 0 0.055 0.022 0.059 0.051 0.040 0.272 0.16 0.41 0.708 0.41 0.435 0 0.621-0.099 0.621-0.329 0-0.133-0.052-0.232-0.729-0.298-0.565-0.056-0.915-0.181-0.915-0.633 0-0.417 0.352-0.666 0.941-0.666 0.662 0 0.99 0.23 1.031 0.723 0.002 0.017-0.004 0.033-0.016 0.046s-0.027 0.019-0.044 0.019h-0.268c-0.028 0-0.052-0.020-0.058-0.047-0.064-0.286-0.221-0.378-0.645-0.378-0.475 0-0.531 0.166-0.531 0.29 0 0.151 0.065 0.194 0.707 0.279 0.635 0.084 0.937 0.203 0.937 0.649 0 0.45-0.375 0.708-1.030 0.708zM22.506 17.321c0.016-0.009 0.035-0.009 0.051 0l0.421 0.243c0.016 0.009 0.026 0.026 0.026 0.044v0.486c0 0.018-0.010 0.035-0.026 0.044l-0.421 0.243c-0.016 0.009-0.035 0.009-0.051 0l-0.42-0.243c-0.016-0.009-0.025-0.026-0.025-0.044v-0.486c0-0.018 0.010-0.035 0.025-0.044l0.42-0.243z"></path>
              </svg>
            </div>
          </a>
          <a href="" className="tech-icons express">
            <div
              onMouseEnter={() => {
                onHoverColor("#717dad");
              }}
              onMouseLeave={() => {
                onHoverColor("purple");
              }}
            >
              <svg
                stroke="currentColor"
                fill="white"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                height="4em"
                width="4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
              </svg>
            </div>
          </a>
          <a href="" className="tech-icons mongodb">
            <div
              onMouseEnter={() => {
                onHoverColor("#007632");
              }}
              onMouseLeave={() => {
                onHoverColor("purple");
              }}
            >
              <svg
                stroke="currentColor"
                fill="white"
                stroke-width="0"
                version="1.1"
                viewBox="0 0 32 32"
                height="4em"
                width="4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"></path>
              </svg>
            </div>
          </a>

          <a href="" className="tech-icons firebase">
            <div
              onMouseEnter={() => {
                onHoverColor("#ffcc30");
              }}
              onMouseLeave={() => {
                onHoverColor("purple");
              }}
            >
              <svg
                stroke="currentColor"
                fill="white"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                height="4em"
                width="4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"></path>
              </svg>
            </div>
          </a>
          <a href="" class="tech-icons js">
            <div
              onMouseEnter={() => {
                onHoverColor("#ffcc30");
              }}
              onMouseLeave={() => {
                onHoverColor("purple");
              }}
            >
              <svg
                stroke="currentColor"
                fill="white"
                stroke-width="0"
                version="1.1"
                viewBox="0 0 32 32"
                height="4em"
                width="4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
