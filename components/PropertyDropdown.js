import React, {useState, useEffect, useContext} from 'react';
import {AiFillHome} from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';

import {Menu} from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const {property, setProperty , properties} = useContext(HouseContext);


  const [isOpen, setIsOpen] = useState(false);
  return <Menu as='div'
  className= 'dropdown relative'>
    <Menu.Button onClick={()=>setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <AiFillHome className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight '  >{property}</div>
        </div>
        <div className='text-[13px]' >Select Your Place</div>
        {
          isOpen? (
            <IoIosArrowUp className='dropdown-icon-secondary' />
          ):(
            <IoIosArrowDown className='dropdown-icon-secondary' />
          )
        }
      
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {properties.map((property, index)=>{
        return(
          <Menu.Item
          onClick={()=>setProperty(property)}
          className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>{property}</Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>;
};

export default PropertyDropdown;