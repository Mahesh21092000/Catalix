import React from 'react'
import './Navbar.css'
import mahesh from '../Assets/pic.jpg'

function Navbar() {
  return (
    <div className='navbar'>
       <div className="navbar-items">
        <div className="nav-input">
        <button className='search-icon'>
        <span class="material-symbols-outlined">
           search
           </span>
        </button>
        <input  className=" input-tag" type="text" placeholder='Search by profile,setting,artifacr etc..' />
        <button className='cancel-icon'>
        <span class="material-symbols-outlined">
           cancel
           </span>
        </button>
        </div>
        <div className="nav-left">
            <button><span class="material-symbols-outlined">
             notifications
             </span></button>
             <button><span class="material-symbols-outlined">
             sms
             </span></button>
             <button>
             <span class="material-symbols-outlined">
             settings
             </span>
             </button>
             <img src={mahesh} alt="" />
        </div>

       </div>

       <div className="down-button">
          <button className='span-btn1'>
          <span class="material-symbols-outlined">
add
</span> Create Report
          </button>

          <button className='span-btn'>
           Share this dashboard
          </button>

          <button className='btn-3'>
           Select Duration
          </button>

          <button className='btn-3'>
          Compare with Duration
          </button>

       </div>

    </div>
  )
}

export default Navbar
