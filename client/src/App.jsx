import { useState } from 'react';
import styled from "styled-components";

const App = () => {

  const [showNav, setShowNav] = useState(false);

  const toggleNavHandler = () => {
    setShowNav(!showNav);
  };

  return (
    <Wrapper>
      <div className="examples">
        <button onClick={toggleNavHandler} className={`${showNav ? "button-one active": "button-one"}`} aria-controls="primary-navigation" aria-expanded={showNav}>
          <svg fill='var(--button-color)' className='hamburguer' viewBox='0 0 100 100' width="250">
            <rect 
            className='line top' 
            width="80" 
            height="10"
            x="10"
            y="25"
            rx="5"
            >
            </rect>
            <rect 
            className='line middle' 
            width="80" 
            height="10"
            x="10"
            y="45"
            rx="5"
            >
            </rect>
            <rect 
            className='line bottom' 
            width="80" 
            height="10"
            x="10"
            y="65"
            rx="5"
            >
            </rect>
          </svg>
        </button>
        
        <button onClick={toggleNavHandler} className={`${showNav ? "button-two active": "button-two"}`} aria-controls="primary-navigation" aria-expanded={showNav}>
          <svg stroke='var(--button-color)' className='hamburguer' viewBox='0 0 100 100' width="250">
            <line 
              className="line top"
              x1="90" x2="10"
              y1="40" y2="40"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="80"
              strokeDashoffset="0"
            >
            </line>
            
            <line 
              className="line bottom"
              x1="10" x2="90"
              y1="60" y2="60"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="80"
              strokeDashoffset="0"
            >
            </line>

          </svg>
        </button>
        <button className={`${showNav ? "button-three active" : "button-three"}`} onClick={toggleNavHandler}>
        <svg stroke='var(--button-color)' fill='none' className='hamburguer' viewBox='-10 -10 120 120' width="250">
          <path
            className='line'
            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin='round'
          >
          </path>
          <line 
              className="line bottom"
              x1="20" x2="90"
              y1="80" y2="80"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="80"
              strokeDashoffset="0"
            >
            </line>

        </svg>
        </button>
      </div>
      <p className={`${showNav ? "show" : "hide"}`}>button was clicked!</p>
    </Wrapper>
  )
}

export default App;


const Wrapper = styled.div`

    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    flex-direction: column;

    .examples{
      display: flex;
      flex-wrap: wrap;
    }

    p {
      color: var(--green-dark);
      margin-top: 1rem;
    }
    .show {
      opacity: 1;
      visibility: visible;
    }
    .hide {
      opacity: 0;
      visibility: hidden;
    }

    button {
      background: transparent;
      border: 10px solid var(--button-color);
      border-radius: 1rem;
      cursor: pointer;
      margin-left: 3rem
    }

    //button one

    .button-one {
      --button-color: var(--black);
    }

    // backwards animation
    .button-one .line {
      transition:
        y 300ms ease-in 300ms,
        rotate 300ms ease-in,
        opacity 0ms 300ms;
      ;
      transform-origin: center;
    }

    .button-one.active .line {
      transition:
        y 300ms ease-in,
        rotate 300ms ease-in 300ms,
        opacity 0ms 300ms;
      ;
    }


    .button-one.active .top {
      y: 45;
      rotate: 45deg;
    }

    .button-one.active .bottom {
      y: 45;
      rotate: -45deg
    }

    .button-one.active .middle {
      opacity: 0;
    }


    .button-two {
      --button-color: var(--red-dark)
    }

    .button-two .line {
      animation: to-open-icon 1s forwards;
    }

    .button-two.active .line {
      animation: to-close-icon 1s forwards;
    }

    .button-two .line.top {
      --rotation: -45deg;
      transform-origin: 65px;
    }
    .button-two .line.bottom{
      --rotation: 45deg;
      transform-origin: 60px 58px;
    }

    @keyframes to-close-icon{
      0% {
        stroke-dashoffset: 0;
      }
      40% {
        stroke-dashoffset: 79.9;
      }
      60% {
        stroke-dashoffset: 79.9; rotate: var(--rotation);
      }
      100% {
        stroke-dashoffset: 0; rotate: var(--rotation);
      }
    }
    @keyframes to-open-icon{
      0% {
        stroke-dashoffset: 0; rotate: var(--rotation);
      }
      40% {
        stroke-dashoffset: 79.9; rotate: var(--rotation);
      }
      60% {
        stroke-dashoffset: 79.9; ;
      }
      100% {
        stroke-dashoffset: 0;
      } 
    }

    .button-three {
      overflow: hidden;
      margin-top: 2rem;
      --button-color: var(--black);
    }



    .button-three .hamburguer {
      transition: translate 1s, rotate 1s;
    }

    .button-three.active .hamburguer {
      translate: 10px -10px;
      rotate: .125turn
    }

    .button-three .line {
      transition: 1s;
      stroke-dasharray: 60 31.5 60 1000;
      transition: 1s;
    }

    .button-three.active .line {
      stroke-dasharray: 60 105 60 1000;
      stroke-dashoffset: -90;
    }

`;