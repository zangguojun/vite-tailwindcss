import React, { useState } from 'react'
import classNames from 'classnames'
import { HiSortDescending, HiSortAscending, HiSearch } from 'react-icons/hi'
import { MENU_CONFIG } from './lib/utils'

function App () {
  const [open, setOpen] = useState(false)
  const [searchHistory, setSearchHistory] = useState([])
  const handleSearch = () => {}
  const handleMenu = (status) => {
    setOpen(status)
  }

  return (
    <div>
      {/* navbar */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className={classNames('dropdown', { 'dropdown-open': open })}>
            <label onClick={() => handleMenu(!open)} className={classNames('swap swap-rotate btn btn-ghost btn-circle', { 'swap-active': open })}>
              <HiSortAscending className="swap-on" size={25} />
              <HiSortDescending className="swap-off" size={25} />
            </label>
            {
              open && (
                <ul onClick={() => handleMenu(false)} className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                  {
                    MENU_CONFIG.map((item) => (
                      <li key={item.key} onClick={() => handleMenu(item.key)} className="hover:bg-base-300">
                        <a className="link link-hover">{item.name}</a>
                      </li>
                    ))
                  }
                </ul>
              )
            }
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">BuChiYu</a>
        </div>
        <div className="navbar-end">
          <label htmlFor="search-modal" className="btn btn-ghost btn-circle">
            <HiSearch size={25} />
          </label>
        </div>
      </div>
      {/* content */}
      <div className="min-h-fit bg-base-100 w-screen p-5">
        <div className="card bg-base-100 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="footer footer-center p-4 bg-base-100 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by BuChiYu</p>
        </div>
      </footer>

      {/* search-modal */}
      <input type="checkbox" id="search-modal" className="modal-toggle" />
      <label htmlFor="search-modal" className="modal cursor-pointer">
        <div className="modal-box mx-2">
          <div className="flex justify-between">
            <input onClick={handleSearch} type="text" placeholder="请输入" className="input input-bordered flex-1" />
            <button className="ml-2 btn btn-ghost btn-circle">
              <HiSearch size={30} />
            </button>
          </div>
          <div className="divider" />
          <div className="min-h-[60px] text-center">
            {
              !searchHistory?.length
                ? '没有历史记录'
                : searchHistory.map((item) => (
                  <div key={item.key}>{item.name}</div>
                ))
            }
          </div>
        </div>
      </label>
    </div>
  )
}

export default App
