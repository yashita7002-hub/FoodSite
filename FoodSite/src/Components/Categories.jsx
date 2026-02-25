import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { MdSoupKitchen } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa";
import { SiBurgerking } from "react-icons/si";
 const Categories=[
 
      {
        id:'2',
        name:"Breakfast",
        image:<MdFreeBreakfast className="h-[60px] w-[40px] text-amber-600" />

    },

      {
        id:'3',
        name:"Soups",
        image:<MdSoupKitchen className="h-[60px] w-[40px] text-amber-600" />
    },

      {
        id:'4',
        name:"Noodles",
        image:<GiNoodles className="h-[60px] w-[40px] text-amber-600" />
    },

      {
        id:'5',
        name:"main_course",
        image:<FaBowlFood className="h-[60px] w-[40px] text-amber-600" />
    },

       {
        id:'6',
        name:"Pizza",
        image:<FaPizzaSlice className="h-[60px] w-[40px]  text-amber-600" />

    },

      {
        id:'7',
        name:"Burger",
        image:<SiBurgerking className="h-[60px] w-[40px] text-amber-600" />

    },

]

export default Categories
