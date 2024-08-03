import React from 'react'
import './Counter.css'
import CountUp from 'react-countup';

const CounterUp = () => {
  return (
    <>
    <div className="counterup">
        <div className="count-container">
            <div className="list">
               <div className="num">
               <CountUp end={100}
               duration={2.75} />%
               </div>
                <p>Responsive</p>
            </div>
            <div className="list">
               <div className="num">
               <CountUp end={99}
               duration={2.75} />%
               </div>
                <p>Sucess</p>
            </div>
            <div className="list">
               <div className="num">
               <CountUp end={8}
               duration={2.75} />+
               </div>
                <p>Projects</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default CounterUp
