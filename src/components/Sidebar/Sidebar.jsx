import React from 'react'
import './Sidebar.css'
import logo from '../Assets/Screenshot (72).png';



function Sidebar() {
  return (
    <div className="sidebar">
        <div className="content">
         <p><span class="material-symbols-outlined">
            play_circle
            </span></p>
            <p className="sidebar-heading">
                <img src={logo} alt="" />
                <h1>Catalix</h1>
            </p>
            <p className="sidebar-links">
                <a href="#"> <span class="material-symbols-outlined">
                    home
                 </span> Home </a>

                 <a href="#"> <span class="material-symbols-outlined">
                    timer
                    </span> Activities  </a>

                 <a href="#" className='Analytics'> <span class="material-symbols-outlined">
                    analytics
                    </span> Analytics </a>

                 <a href="#"> <span class="material-symbols-outlined">
                    rocket_launch
                    </span> Transformation   </a>

                 <a href="#"> <span class="material-symbols-outlined">
                    library_books
                    </span> Library </a>
            </p>
<hr/>
            <p className="sidebar-links">
            <a href="#"><span class="material-symbols-outlined">
settings
</span> Settings</a>
<a href="#"> <span class="material-symbols-outlined">
move_item
</span> Logout</a>


            </p>

        


        </div>
   
    </div>
  )
}

export default Sidebar
