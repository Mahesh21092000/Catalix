import React from 'react'
import './Box2.css'

function Box2() {
  return (
    <div className='box2'>
        <div className="ontime">
            <div className="left">
                <h5>On Time</h5>
                <p>Completed Iterations</p>
                <p>Total Iterations</p>
                <p>%Iterations Done</p>
            </div>
            <div className="right">
                <h5 className='greendot'></h5>
                <h5>7</h5>
                <h5>9</h5>
                <h5>77.8%</h5>
            </div>
            
        </div>

        <div className="ontime">
            <div className="left">
                <h5>On Scope</h5>
                <p>Story Points Done</p>
                <p>Total Story Points</p>
                <p>% Stories Done</p>
            </div>
            <div className="right">
                <h5 className='greendot'></h5>
                <h5>3200</h5>
                <h5>4230</h5>
                <h5>70.9%</h5>
            </div>
            
        </div>

        <div className="ontime">
            <div className="left">
                <h5>On Velocity</h5>
                <p>Average Velocity</p>
                <p>Required Velocity</p>
               
            </div>
            <div className="right">
                <h5 className='redlight'></h5>
                <h5>428.6</h5>
                <h5>615.0</h5>
                
            </div>
            
        </div>

      
    </div>
  )
}

export default Box2
