import React, {useState, useEffect, useContext} from 'react';
import {AiFillWallet} from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';

import {Menu} from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PriceRangeDropDown = () => {
  const {price, setPrice} = useContext(HouseContext);
  // console.log(properties);

  const [isOpen, setIsOpen] = useState(false);

  const prices =[
    {
      value: 'Price range (any)', 
    }, {
      value: '100000 - 130000', 
    }, {
      value: '130000 - 160000', 
    }, {
      value: '160000 - 190000', 
    }, {
      value: '190000 - 220000', 
    }, {
      value: '220000 - 250000', 
    }, {
      value: '10000 - 30000', 
    }, {
      value: '30000 - 40000', 
    },
  ]

  return <Menu as='div'
  className= 'dropdown relative'>
    <Menu.Button onClick={()=>setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <AiFillWallet className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight '  >{price}</div>
        </div>
        <div className='text-[13px]' >Choose Price Range</div>
        {
          isOpen? (
            <IoIosArrowUp className='dropdown-icon-secondary' />
          ):(
            <IoIosArrowDown className='dropdown-icon-secondary' />
          )
        }
      
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
      {prices.map((price, index)=>{
        return(
          <Menu.Item
          onClick={()=>setPrice(price.value)}
          className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>{price.value}</Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>;
};

export default PriceRangeDropDown;