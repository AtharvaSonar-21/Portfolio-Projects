import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBar({
  isOpen,
  sentcount = 0,
  draftcount = 0,
  updatescount = 0,
  promotionalcount = 0,
  inboxEmails = [],
  unreadCount
}) {
  const baseClass =
    'transition-all duration-300 bg-white shadow-md h-full overflow-y-auto';

  const navLinkClass = ({ isActive }) =>
    `block py-2 px-3 duration-200 rounded-lg w-full text-left ${
      isActive ? 'text-orange-700 font-semibold' : 'text-black'
    } hover:bg-gray-50`;

  return (
    <div className={`${baseClass} ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
      <div className="flex flex-col justify-top h-screen bg-gray-100">
        <div className="text-center p-4">
          <p className="text-xl font-semibold text-gray-800">Quickmail.co</p>
        </div>

        <div className="flex flex-col gap-2 p-2">
          {/* Inbox */}
          <NavLink to="/" className={navLinkClass}>
            <div className="flex justify-between items-center p-3 rounded-xl bg-gray-200">
              <span>Inbox</span>
              {unreadCount > 0 && (
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-2xl">
                  {unreadCount}
                </span>
              )}
            </div>
          </NavLink>

          {/* Updates */}
          <NavLink to="/updates" className={navLinkClass}>
            <div className="flex justify-between items-center p-3 rounded-xl bg-gray-200">
              <span>Updates</span>
              {updatescount > 0 && (
                <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-2xl">
                  {updatescount}
                </span>
              )}
            </div>
          </NavLink>

          {/* Promotional */}
          <NavLink to="/promotional" className={navLinkClass}>
            <div className="flex justify-between items-center p-3 rounded-xl bg-gray-200">
              <span>Promotional</span>
              {promotionalcount > 0 && (
                <span className="bg-blue-400 text-white text-xs px-2 py-1 rounded-2xl">
                  {promotionalcount}
                </span>
              )}
            </div>
          </NavLink>

          {/* Sent */}
          <NavLink to="/sent" className={navLinkClass}>
            <div className="flex justify-between items-center p-3 rounded-xl bg-gray-200">
              <span>Sent</span>
              {sentcount > 0 && (
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-2xl">
                  {sentcount}
                </span>
              )}
            </div>
          </NavLink>

          {/* Drafts */}
          <NavLink to="/drafts" className={navLinkClass}>
            <div className="flex justify-between items-center p-3 rounded-xl bg-gray-200">
              <span>Drafts</span>
              {draftcount > 0 && (
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-2xl">
                  {draftcount}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default SideBar;