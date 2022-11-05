import React from 'react'
import Item from './Item'
import {PRODUCTS, RESOURCES, LIUM, LIUM1 } from './Menu'


 const itemscontainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grind-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 text-slate-100">
     <Item Links={PRODUCTS} title="PRODUCTS"/>
     <Item Links={RESOURCES} title="RESOURCES"/>
     <Item Links={LIUM} title="LIUM"/>
     <Item Links={LIUM1} title="LIUM1"/>
    </div>
  )
}

export default itemscontainer
