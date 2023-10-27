import React, {useState, useEffect, useContext} from 'react';
import {BiMap} from 'react-icons/bi';
import { IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';

import {Menu} from '@headlessui/react';
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
  const {country, setCountry, countries} = useContext(HouseContext);
  // console.log(countries);

  const [isOpen, setIsOpen] = useState(false);
  return <Menu as='div'
  className= 'dropdown relative'>
    <Menu.Button onClick={()=>setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <BiMap className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight '  >{country}</div>
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
      {countries.map((country, index)=>{
        return(
          <Menu.Item
          onClick={()=>setCountry(country)}
          className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>{country}</Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>;
};

export default CountryDropdown;