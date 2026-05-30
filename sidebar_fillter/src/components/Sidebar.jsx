import React from 'react'

const Sidebar = ({ selectedBrands, setSelectedBrands }) => {

 function handleBrandChange(brand, checked){
    if(checked ){
        setSelectedBrands([...selectedBrands, brand])
    }
    if(checked == false){
       setSelectedBrands( selectedBrands.filter((b)=> b !== brand ))
    }
 }

  return (
    <div className="flex flex-col items-start gap-4 p-7 bg-gray-100">
        <ul>
            <li>
                <input type="checkbox" id="apple" onChange={(e) => handleBrandChange("Apple", e.target.checked)} />
                <label htmlFor="apple">Apple</label>
                
            </li>
            <li>
                <input type="checkbox" id="samsung" onChange={(e) => handleBrandChange("Samsung", e.target.checked)} />
                <label htmlFor="samsung">Samsung</label>
              
            </li>
            <li>
              
                <input type="checkbox" id="oppo" onChange={(e) => handleBrandChange("Oppo", e.target.checked)} />
                <label htmlFor="oppo">oppo</label>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
