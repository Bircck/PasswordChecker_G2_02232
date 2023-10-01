import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "./PassStrengthViz.scss"; // Assuming you have a CSS file named PassStrengthViz.css

function PassStrengthViz({ password }) {
  const [passStrength, setPassStrength] = useState(0);

  useEffect(() => {
    const evaluateStrength = () => {
      let strength = 0;
      const length = password.length;

      if (length > 7) strength++;
      if (/[a-z].?[A-Z]/g.test(password)) strength++;
      if (/[0-9]{1}/.test(password)) strength++;
      if (/[!@#\$%\^\&*\)\(+=._-]/g.test(password)) strength++;

      setPassStrength(strength);
    };

    evaluateStrength();

    gsap.set("#swords", { y: -60 });
    gsap.set("#sword-left", { x: -30, rotate: -30, transformOrigin: "center" });
    gsap.set("#sword-right", { x: 30, rotate: 30, transformOrigin: "center" });
    gsap.set("#wings", { scale: 0, y: 60, transformOrigin: "center" });
    gsap.set("#crown", { rotate: 30, transformOrigin: "center", y: 60 });

    const swordLeft = gsap.timeline({ paused: true });
    swordLeft.to("#sword-left", 0.5, {
      opacity: 1,
      rotate: 0,
      y: 60,
      x: 0,
      ease: "back.out",
    });

    const swordRight = gsap.timeline({ paused: true });
    swordRight.to("#sword-right", 0.5, {
      opacity: 1,
      rotate: 0,
      y: 60,
      x: 0,
      ease: "power4.inOut",
    });

    const wings = gsap.timeline({ paused: true });
    wings.to("#wings", 0.5, {
      delay: 0.5,
      opacity: 1,
      scale: 1,
      y: 0,
      ease: "back.out",
      transformOrigin: "center",
    });

    const crown = gsap.timeline({ paused: true });
    crown.to("#crown", 0.5, {
      delay: 1,
      opacity: 1,
      y: 0,
      rotate: 0,
      ease: "back.out",
    });

    // Determine which animations to play based on password strength
    switch (passStrength) {
      case 0:
        swordLeft.reverse();
        swordRight.reverse();
        wings.reverse();
        crown.reverse();
        break;
      case 1:
        swordLeft.play();
        swordRight.reverse();
        wings.reverse();
        crown.reverse();
        break;
      case 2:
        swordLeft.play();
        swordRight.play();
        wings.reverse();
        crown.reverse();
        break;
      case 3:
        swordLeft.play();
        swordRight.play();
        wings.play();
        crown.reverse();
        break;
      case 4:
        swordLeft.play();
        swordRight.play();
        wings.play();
        crown.play();
        break;
      default:
        break;
    }
  }, [password, passStrength]);

  return (
    <div id="svgWrapper">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 305.7 326.9"
        style={{ enableBackground: "new 0 0 305.7 326.9" }}
        xmlSpace="preserve"
      >
        <g id="swords">
          <g id="sword-right">
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="201.8246"
              y1="81.0234"
              x2="201.8246"
              y2="105.8914"
            >
              <stop offset="0" style={{ stopColor: "#000000" }} />
              <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
            </linearGradient>
            <line class="st0" x1="178.6" y1="83" x2="225.1" y2="103.9" />
            <linearGradient
              id="SVGID_2_"
              gradientUnits="userSpaceOnUse"
              x1="165.5329"
              y1="51.6546"
              x2="165.5329"
              y2="300.8525"
            >
              <stop offset="0" style={{ stopColor: "#000000" }} />
              <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
            </linearGradient>
            <polyline
              class="st1"
              points="214.5,53.7 108.8,275.7 109.7,298.9 127,284.9 222.3,57.9 		"
            />
            <linearGradient
              id="SVGID_3_"
              gradientUnits="userSpaceOnUse"
              x1="222.8899"
              y1="34.1813"
              x2="222.8899"
              y2="58.9361"
            >
              <stop offset="0" style={{ stopColor: "#000000" }} />
              <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
            </linearGradient>
            <ellipse
              transform="matrix(0.9345 -0.356 0.356 0.9345 -1.9738 82.3909)"
              class="st2"
              cx="222.9"
              cy="46.6"
              rx="10.4"
              ry="10.4"
            />
          </g>
          <g id="sword-left">
            <linearGradient
              id="SVGID_4_"
              gradientUnits="userSpaceOnUse"
              x1="110.5006"
              y1="81.0234"
              x2="110.5006"
              y2="105.8914"
            >
              <stop offset="0" style={{ stopColor: "#000000" }} />
              <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
            </linearGradient>
            <line class="st3" x1="133.8" y1="83" x2="87.2" y2="103.9" />
            <linearGradient
              id="SVGID_5_"
              gradientUnits="userSpaceOnUse"
              x1="146.7923"
              y1="51.6546"
              x2="146.7923"
              y2="300.8525"
            >
              <stop offset="0" style={{ stopColor: "#000000" }} />
              <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
            </linearGradient>
            <polyline
              class="st4"
              points="97.8,53.7 203.5,275.7 202.6,298.9 185.3,284.9 90,57.9 		"
            />
            <linearGradient
              id="SVGID_6_"
              gradientUnits="userSpaceOnUse"
              x1="89.4354"
              y1="34.1813"
              x2="89.4354"
              y2="58.9361"
            >
              <stop offset="0" style={{ stopColor: "#000000" }} />
              <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
            </linearGradient>
            <ellipse
              transform="matrix(0.356 -0.9345 0.9345 0.356 14.0903 113.5626)"
              class="st5"
              cx="89.4"
              cy="46.6"
              rx="10.4"
              ry="10.4"
            />
          </g>
        </g>
        <g id="wings">
          <linearGradient
            id="SVGID_7_"
            gradientUnits="userSpaceOnUse"
            x1="89.0083"
            y1="80.0864"
            x2="89.0083"
            y2="218.2749"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path
            class="st6"
            d="M153.8,180.8c0,0-3.6,25-23.8,32.5s-42.4-0.9-50.8-6.3s-18.2-12.5-24-27.1c0,0-19.1-11.8-18.7-41.7
		c0,0-18.7-20.7-10-54.6c0,0,2.3-4.4,7.7,1.9c5.4,6.3,47,48.4,89.4,61.5C123.6,147,154.8,155.7,153.8,180.8z"
          />
          <linearGradient
            id="SVGID_8_"
            gradientUnits="userSpaceOnUse"
            x1="61.0109"
            y1="135.4071"
            x2="61.0109"
            y2="164.9678"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path class="st7" d="M86.2,163.5c0,0-25.5-4.7-50.4-26.6" />
          <linearGradient
            id="SVGID_9_"
            gradientUnits="userSpaceOnUse"
            x1="74.683"
            y1="178.1688"
            x2="74.683"
            y2="189.2321"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path
            class="st8"
            d="M93.9,187.4c-1.1,0.1-14,2-31.3-4.9c-16.2-6.5,0,0,0,0"
          />
          <linearGradient
            id="SVGID_10_"
            gradientUnits="userSpaceOnUse"
            x1="217.9578"
            y1="80.8117"
            x2="217.9578"
            y2="219.0002"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path
            class="st9"
            d="M153.2,181.5c0,0,3.6,25,23.8,32.5c20.2,7.5,42.4-0.9,50.8-6.3c8.4-5.4,18.2-12.5,24-27.1
		c0,0,19.1-11.8,18.7-41.7c0,0,18.7-20.7,10-54.6c0,0-2.3-4.4-7.7,1.9s-47,48.4-89.4,61.5C183.4,147.7,152.2,156.4,153.2,181.5z"
          />
          <linearGradient
            id="SVGID_11_"
            gradientUnits="userSpaceOnUse"
            x1="245.9552"
            y1="136.1324"
            x2="245.9552"
            y2="165.6931"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path class="st10" d="M220.8,164.2c0,0,25.5-4.7,50.4-26.6" />
          <linearGradient
            id="SVGID_12_"
            gradientUnits="userSpaceOnUse"
            x1="232.2831"
            y1="178.8941"
            x2="232.2831"
            y2="189.9574"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path
            class="st11"
            d="M213,188.1c1.1,0.1,14,2,31.3-4.9c16.2-6.5,0,0,0,0"
          />
        </g>
        <g id="shield">
          <linearGradient
            id="SVGID_13_"
            gradientUnits="userSpaceOnUse"
            x1="155.1985"
            y1="95.6"
            x2="155.1985"
            y2="265.28"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path
            class="st12"
            d="M155.4,97.6c0,0,2.4-0.4,4.4,2.8s24.9,27.9,69.8,26c0,0-7,89.9-74.2,136.5c0,0-63.1-39.6-74.5-136.1
		c0,0,45.6,2.9,70.3-26.7C151.2,100,152.6,97.6,155.4,97.6z"
          />
          <linearGradient
            id="SVGID_14_"
            gradientUnits="userSpaceOnUse"
            x1="171.026"
            y1="120.7933"
            x2="171.026"
            y2="131.8795"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path class="st13" d="M163.6,122.3c0,0,8.6,5.4,14.9,8.1" />
          <linearGradient
            id="SVGID_15_"
            gradientUnits="userSpaceOnUse"
            x1="201.7623"
            y1="133.1288"
            x2="201.7623"
            y2="189.382"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path
            class="st14"
            d="M188.8,134.6c0,0,13.3,4.6,25.9,6c0,0-5.7,26.8-14.7,47.2"
          />
          <linearGradient
            id="SVGID_16_"
            gradientUnits="userSpaceOnUse"
            x1="190.0285"
            y1="196.0098"
            x2="190.0285"
            y2="213.7522"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path class="st15" d="M194.2,197.5c0,0-4.8,10.5-8.4,14.7" />
          <linearGradient
            id="SVGID_17_"
            gradientUnits="userSpaceOnUse"
            x1="130.1562"
            y1="203.381"
            x2="130.1562"
            y2="230.6007"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path class="st16" d="M121.1,204.9c0,0,11.7,19.7,18.1,24.2" />
        </g>
        <g id="crown">
          <linearGradient
            id="SVGID_18_"
            gradientUnits="userSpaceOnUse"
            x1="155.6981"
            y1="60.7746"
            x2="155.6981"
            y2="66.5512"
          >
            <stop offset="0" style={{ stopColor: "#000000" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path class="st17" d="M133.2,65.1c0,0,21.9-6.2,44.9,0" />
          <linearGradient
            id="SVGID_19_"
            gradientUnits="userSpaceOnUse"
            x1="155.2471"
            y1="26.5662"
            x2="155.2471"
            y2="61.6399"
          >
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
            <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
          </linearGradient>
          <path
            class="st18"
            d="M128.9,60.1l-5.8-12.8l8.8-5.5c0,0,1.3,9.8,9.1,9.6c7.8-0.2,9.3-6.5,9.3-6.5s2.6-7.2-4.5-11.4l9.4-5.5
		l9.2,5.3c0,0-6.3,4.1-4.6,10.7s8.2,7.2,8.2,7.2s9.5,1.1,10.6-9.6l8.8,5.3l-5.7,13.1C181.7,60.1,155.8,52.4,128.9,60.1z"
          />
        </g>
      </svg>
    </div>
  );
}

export default PassStrengthViz;
