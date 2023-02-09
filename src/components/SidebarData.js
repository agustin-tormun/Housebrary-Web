import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"
import * as BsIcons from "react-icons/bs"
import * as RiIcons from "react-icons/ri"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaBook/>,
        cName: 'nav-text'
    },
    {
        title: 'Reading',
        path: '/reading',
        icon: <FaIcons.FaBookOpen/>,
        cName: 'nav-text'
    },
    {
        title: 'Finished',
        path: '/finished',
        icon: <MdIcons.MdBookmarkAdded/>,
        cName: 'nav-text'
    },
    {
        title: 'Favorite',
        path: '/favorites',
        icon: <BsIcons.BsBookmarkHeartFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Wishlist',
        path: '/wishlist',
        icon: <FaIcons.FaShoppingBag/>,
        cName: 'nav-text'
    },
    {
        title: 'Borrowed',
        path: '/borrowed',
        icon: <RiIcons.RiContactsBook2Fill/>,
        cName: 'nav-text'
    },
    {
        title: 'Abandoned',
        path: '/abandoned',
        icon: <RiIcons.RiBookmark2Fill/>,
        cName: 'nav-text'
    },
    {
        title: 'Add New Book',
        path: '/add-book',
        icon: <MdIcons.MdAddCircle/>,
        cName: 'nav-text'
    },
]