import React from 'react'
import { RiSearch2Line } from "react-icons/ri";

export default function Search() {
  return (
   <form >
    <div className="input-group">
        <input type="text" placeholder="Search your favourite restaurant" id="search_field" className="form-control" />

        <div className="input-group-append">
            <button id="search_btn" className="btn">
            <RiSearch2Line className='ri RiSearch2Line' />
            </button>
        </div>
    </div>
   </form>
  )
}
