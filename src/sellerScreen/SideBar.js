import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBar = [
    {
      title: 'AddProducts',
      path: '/AddProducts',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'ViewProducts',
      path: '/ViewProducts',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'Profile',
      path: '/Profile',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    }
  ];