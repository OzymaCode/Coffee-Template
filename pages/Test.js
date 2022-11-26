import { find, initial } from 'lodash'
import { useEffect, useState } from 'react'

const Test = () => {
  // let old = (
  //   <div>
  //     <ul className="flex flex-row">
  //       <li
  //         className={`h-full flex flex-col justify-center items-center  ${
  //           listItemHover == 'locations'
  //             ? 'border-y-[3px] border-b-[#f78f1e] border-t-transparent'
  //             : ''
  //         }`}
  //         onMouseOver={() => {
  //           setListItemHover('locations')
  //         }}
  //         onMouseOut={() => {
  //           setListItemHover('')
  //         }}
  //       >
  //         <a
  //           href=""
  //           className={` ${
  //             listItemHover == 'locations' ? 'text-[#f78f1e]' : ''
  //           } font-bold font-sans text-sm px-3 `}
  //         >
  //           LOCATIONS
  //         </a>
  //       </li>
  //     </ul>
  //     <ul
  //       className={`${
  //         listItemHover != 'locations' && 'hidden'
  //       } list-disc list-inside text-[#f78f1e] text-sm font-mono `}
  //     >
  //       <li>
  //         <a href="" className="text-white leading-10">
  //           Geneva
  //         </a>
  //         {/* <ul className="text-transparent list-disc list-inside">
  //         <li>
  //           <a href="" className="text-white leading-5">
  //             Ru de stand
  //           </a>
  //         </li>
  //         <li>
  //           <a href="" className="text-white leading-5">
  //             Mont-Blanc 17
  //           </a>
  //         </li>
  //         <li>
  //           <a href="" className="text-white leading-5">
  //             Eaux-Vives
  //           </a>
  //         </li>
  //         <li>
  //           <a href="" className="text-white leading-5">
  //             Plainpalais
  //           </a>
  //         </li>
  //         <li>
  //           <a href="" className="text-white leading-5">
  //             Ru de stand
  //           </a>
  //         </li>
  //       </ul> */}
  //       </li>
  //       <li>
  //         <a href="" className="text-white leading-10">
  //           Zürich
  //         </a>
  //         {/* <ul className="text-transparent list-disc list-inside">
  //         <li>
  //           <a href="" className="text-white leading-5">
  //             Talacker
  //           </a>
  //         </li>
  //         <li>
  //           <a href="" className="text-white leading-5">
  //             Oerlikon
  //           </a>
  //         </li>
  //       </ul> */}
  //       </li>
  //     </ul>
  //   </div>
  // )

  let initialStructure = {
    whoWeAre: {},
    locations: {
      geneva: {
        rueDuStand: {},
        montBlanc17: {},
        eauxVives: {},
        plainpalais: {},
      },
      zurich: {
        talacker: {},
        oerlikon: {},
      },
    },
    shop: {
      beans: {},
      merchandise: {},
    },
    catering: {},
    contact: {},
  }

  const callback = () => {
    console.log('success!!!!!')
  }

  // Uses element name to find element in an object
  const findElement = (needle, haystack = initialStructure, cb = callback) => {
    let keys = Object.keys(haystack)
    let result = 'hi'
    for (let i = 0; i < keys.length; i++) {
      console.log(haystack, ` -> ${keys[i]}`)
      const recurse = () => findElement(needle, haystack[keys[i]])
      if (keys[i] == needle) {
        console.log(`--------FOUND: ${keys[i]} = `, haystack[needle])
        result = haystack[needle] //
        // return haystack[needle]
        cb()
      } else {
        recurse()
      }

      // let recurseKeys = recurse == null ? [] : Object.keys(recurse)
      // else if (recurseKeys.includes(needle))
      // let recurseKeys = recurse == null ? [] : Object.keys(recurse)
    }
    return result
  }

  const objectItem = (name, elements) => {
    // let elements = { geneva: {}, zurich: {} } //findElement(name)

    return (
      <div
        onMouseOver={() =>
          document.getElementById(name).classList.remove('hidden')
        }
        onMouseOut={() => document.getElementById(name).classList.add('hidden')}
        className="relative"
      >
        <h1>{name}</h1>
        <div id={name} className="absolute">
          <div>AAAAA</div>

          {Object.keys(elements).map((elementName, i) => {
            console.log(findElement('geneva'))
            console.log(elementName)
            return <div key={i}>{objectItem(elementName, {})}</div>
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center h-screen w-full bg-[steelblue]">
      <div className="flex flex-col">
        {/* <div
          onMouseOver={() =>
            document.getElementById('LOCATIONS').classList.remove('hidden')
          }
          onMouseOut={() =>
            document.getElementById('LOCATIONS').classList.add('hidden')
          }
          className="relative"
        >
          <h1>LOCATIONS</h1>
          <div id="LOCATIONS" className="absolute">
            <div>geneva</div>
            <div>zurich</div>
          </div>
        </div>*/}

        <button
          onClick={() => console.log('find element: ', findElement('beans'))}
          className="p-10 bg-red-800 text-white"
        >
          CLICK
        </button>

        {/* {objectItem('locations', { geneva: {}, zurich: {} })} */}
      </div>
    </div>
  )
}

export default Test

// else if (recurseKeys.includes(needle))
// let recurseKeys = recurse == null ? [] : Object.keys(recurse)

// else if (
//   findElement(needle, haystack[Object.keys(haystack)[i]]) == needle
// ) {
//   return findElement(needle, haystack[Object.keys(haystack)[i]])
// }

{
  /* <button
          onClick={() => findElement()}
          className="p-10 bg-red-800 text-white"
        >
          CLICK
        </button> */
}

{
  /* {elements == null
  ? ''
  : Object.keys(elements).map((elementName) => {
      objectItem(
        elementName,
        findElement(elementName, initialStructure),
      )
    })} */
}

/* objectItem(elementName, findElement(elementName, initialStructure)) */

// data = initialStructure.locations.geneva

// let newStructure1 = {
//   ...initialStructure,
//   locations: {
//     ...initialStructure.locations,
//     hover: true,
//   },
// }

// const [hoverStructure, setHoverStructure] = useState(initialStructure)
// useEffect(
//   (initialStructure) => {
//     console.log({
//       locations: {
//         hover: !locations.hover,
//         locations,
//       },
//       initialStructure,
//     })
//   },
//   [hoverStructure],
// )
