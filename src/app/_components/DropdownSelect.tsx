// import React from "react";
// import { useState } from "react";

// interface DropdownSelectProps {
//   label: string;
//   options: Option[]; //array of option objects
//   value: string;
//   onChange: OnChangeFunction;
// }
// interface Option {
//   label: string;
//   value: string;
// }

// type OnChangeFunction = (event: React.ChangeEvent<HTMLSelectElement>) => void;

// const DropdownSelect = (props: DropdownSelectProps) => {
//   const { label, onChange, value, options } = props;
//   const [dropdownOpen, SetDropdownOpen] = useState(false);

//   const handleOpenDropdown = () => {
//     SetDropdownOpen(true);
//   };

//   return (
//     <label>
//       <button onClick={handleOpenDropdown}>{label}</button>
//       {dropdownOpen ? (
//         <select value={value} onChange={onChange}>
//           {options.map((option) => (
//             <option value={option.value}>{option.label}</option>
//           ))}
//         </select>
//       ) : null}
//     </label>
//   );
// };

// export default DropdownSelect;

// import React from "react";

import React from "react";

const DropdownSelect = ({ submenus, dropdown }) => {
  return (
    <>
      <ul className={`dropdown ${dropdown ? "show" : ""} hidden`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropdownSelect;
