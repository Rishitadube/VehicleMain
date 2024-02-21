import React from 'react'
import 
{BsGrid1X2Fill, BsListCheck, BsMenuButtonWideFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                Vehicle Maintenance Tracker
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> My Cars
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Maintenance Record
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar