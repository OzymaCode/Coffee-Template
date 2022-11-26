import { FiMenu } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { RiShoppingBasket2Fill } from 'react-icons/ri'
import { BiUserCircle } from 'react-icons/bi'
import Image from 'next/image'

const Header = () => {
  const [headerBtn, setHeaderBtn] = useState('')
  const [scrollMode, setScrollMode] = useState(false)
  const [midScreen, setMidScreen] = useState(false)
  const [listItemHover, setListItemHover] = useState('')

  const headerContainer = (content) => {
    return (
      <div className="fixed pt-28 p-3 text-white top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#282828] to-[#202020]">
        {content}
        <div
          className="flex flex-col p-2 justify-center items-center text-sm font-mono"
          onClick={() => setHeaderBtn((headerBtn) => '')}
        >
          <div className="p-1">
            <AiOutlineArrowUp size={20} />
          </div>
          <div>Close Menu</div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      // Check the screen size
      if (screen.width > 640) {
        setMidScreen(true)
      } else {
        setMidScreen(false)
      }
    })

    // Make the header go from transparent to a white background after scrolling
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 200 && scrollMode == false && midScreen) {
        setScrollMode(true)
      } else if (window.pageYOffset < 200 && scrollMode == true) {
        setScrollMode(false)
      }
    })
  })

  const menu = (
    <ul className="flex flex-col justify-center items-center">
      <li className="border-b w-full py-3">
        <a href="" className="font-bold font-sans text-sm">
          WHO WE ARE?
        </a>
      </li>
      <li className="border-b w-full py-3">
        <a href="" className="font-bold font-sans text-sm">
          LOCATIONS
        </a>
        <ul className="list-disc list-inside text-[#f78f1e] text-sm font-mono ">
          <li>
            <a href="" className="text-white leading-10">
              Geneva
            </a>
            <ul className="text-transparent list-disc list-inside">
              <li>
                <a href="" className="text-white leading-5">
                  Ru de stand
                </a>
              </li>
              <li>
                <a href="" className="text-white leading-5">
                  Mont-Blanc 17
                </a>
              </li>
              <li>
                <a href="" className="text-white leading-5">
                  Eaux-Vives
                </a>
              </li>
              <li>
                <a href="" className="text-white leading-5">
                  Plainpalais
                </a>
              </li>
              <li>
                <a href="" className="text-white leading-5">
                  Ru de stand
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="" className="text-white leading-10">
              Zürich
            </a>
            <ul className="text-transparent list-disc list-inside">
              <li>
                <a href="" className="text-white leading-5">
                  Talacker
                </a>
              </li>
              <li>
                <a href="" className="text-white leading-5">
                  Oerlikon
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="border-b w-full py-3 ">
        <a href="" className="font-bold font-sans text-sm ">
          SHOP
        </a>
        <ul className="list-disc list-inside text-[#f78f1e] text-sm font-mono ">
          <li>
            <a href="" className="text-white leading-10">
              Beans
            </a>
          </li>
          <li>
            <a href="" className="text-white leading-5">
              Merchandise
            </a>
          </li>
        </ul>
      </li>
      <li className="border-b w-full py-3">
        <a href="" className="font-bold font-sans text-sm">
          COFFEE CATERING
        </a>
        {/* <ul>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Jebrew</a>
            </li>
          </ul> */}
      </li>
      <li className="border-b w-full py-3">
        <a href="" className="font-bold font-sans text-sm">
          TERMS & CONDITIONS
        </a>
      </li>
    </ul>
  )

  const cart = <div></div>
  const account = <div></div>

  // nav bar for small sized screens
  const smallNavBar = (
    <>
      <div>
        {headerBtn == 'account' && headerContainer(account)}
        {headerBtn == 'menu' && headerContainer(menu)}
        {headerBtn == 'cart' && headerContainer(cart)}
      </div>
      <div
        className={`${
          headerBtn != '' ? 'fixed top-0 w-full bg-black text-white' : ''
        }`}
      >
        <div id="header" className="flex pb-3 flex-col border-b mx-3">
          <div
            className={`${
              scrollMode == true ? 'text-[#c57b2b]' : 'text-[#f78f1e]'
            }  font-semibold text-center`}
          >
            CHECK OUT THE LATEST BOREAL IN PLAINPALAIS - ROND-POINT DE
            PLAINPALAIS 6
          </div>
          <div className="flex flex-row justify-between ">
            <div className=" ">
              <Image
                src="/coffee_logo.png"
                alt="logo"
                className={`w-12 sm:w-12 md:w-16 lg:w-24
            ${scrollMode == true ? '' : 'filter invert'}
            `}
              />
            </div>
            <div className="flex flex-row justify-center items-center">
              <div className="border-r px-2 ">
                <RiShoppingBasket2Fill
                  size={25}
                  className={` ${headerBtn == 'cart' && 'text-[#f78f1e]'}
              ${scrollMode == true ? 'text-black' : 'text-white'}
              `}
                  onClick={() =>
                    headerBtn == 'cart'
                      ? setHeaderBtn((headerBtn) => '')
                      : setHeaderBtn((headerBtn) => 'cart')
                  }
                />
              </div>
              <div className="border-r px-2">
                <BiUserCircle
                  className={`${
                    scrollMode == true ? 'text-black' : 'text-white'
                  } ${headerBtn == 'account' && 'text-[#f78f1e]'}`}
                  size={25}
                  onClick={() =>
                    headerBtn == 'account'
                      ? setHeaderBtn((headerBtn) => '')
                      : setHeaderBtn((headerBtn) => 'account')
                  }
                />
              </div>
              <div id="menu" className="px-2">
                <FiMenu
                  className={`${
                    scrollMode == true ? 'text-black' : 'text-white'
                  } ${headerBtn == 'menu' && 'text-[#f78f1e]'}`}
                  size={25}
                  onClick={() =>
                    headerBtn == 'menu'
                      ? setHeaderBtn((headerBtn) => '')
                      : setHeaderBtn((headerBtn) => 'menu')
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  // nav bar for large sized screens
  const largeNavBar = <></>

  return (
    <div
      className={`w-full flex justify-center ${
        scrollMode == true ? 'bg-white' : ''
      } ${midScreen == true ? 'fixed' : 'absolute top-0'} `}
    >
      {/* {midScreen == true ? largeNavBar : smallNavBar} */}
      {/* <div>
        {headerBtn == 'account' && headerContainer(account)}
        {headerBtn == 'menu' && headerContainer(menu)}
        {headerBtn == 'cart' && headerContainer(cart)}
      </div> */}
      <div
        className={`${
          headerBtn != '' ? 'fixed top-0 bg-black text-white' : ''
        } max-w-6xl w-full `}
      >
        <div id="header" className="flex  flex-col border-b mx-3  ">
          <div
            className={`${
              scrollMode == true ? 'text-[#c57b2b]' : 'text-[#f78f1e]'
            }  font-semibold text-center pt-2`}
          >
            CHECK OUT THE LATEST BOREAL IN PLAINPALAIS - ROND-POINT DE
            PLAINPALAIS 6
          </div>
          <div className="flex flex-row justify-between h-full ">
            <div className=" ">
              <Image
                src="/coffee_logo.png"
                alt="logo"
                className={`w-12 sm:w-12 md:w-16 lg:w-24 pb-5
            ${scrollMode == true ? '' : 'filter invert'}
            `}
              />
            </div>
            <div className="flex flex-row justify-center items-center ">
              {/* ------------------------------------------------------------------------------------------- */}
              <ul className="flex flex-row h-full ">
                <li
                  className={`h-full flex justify-center items-center  ${
                    listItemHover == 'who'
                      ? 'border-y-[3px] border-b-[#f78f1e] border-t-transparent'
                      : ''
                  }`}
                  onMouseOver={() => {
                    setListItemHover('who')
                  }}
                  onMouseOut={() => {
                    setListItemHover('')
                  }}
                >
                  <a
                    href=""
                    className={`${
                      scrollMode == true ? 'text-black' : 'text-white'
                    } ${
                      listItemHover == 'who' ? 'text-[#f78f1e]' : ''
                    } font-bold font-sans text-sm px-3 border-r   `}
                  >
                    WHO WE ARE?
                  </a>
                </li>
                <li
                  className={`h-full flex flex-col justify-center items-center  ${
                    listItemHover == 'locations'
                      ? 'border-y-[3px] border-b-[#f78f1e] border-t-transparent'
                      : ''
                  }`}
                  onMouseOver={() => {
                    setListItemHover('locations')
                  }}
                  onMouseOut={() => {
                    setListItemHover('')
                  }}
                >
                  <a
                    href=""
                    className={`${
                      scrollMode == true ? 'text-black' : 'text-white'
                    } ${
                      listItemHover == 'locations' ? 'text-[#f78f1e]' : ''
                    } font-bold font-sans text-sm px-3 border-r relative`}
                  >
                    LOCATIONS
                  </a>
                  <ul
                    className={`${
                      listItemHover != 'locations' && 'hidden'
                    } list-disc list-inside text-[#f78f1e] text-sm font-mono fixed`}
                  >
                    <li>
                      <a href="" className="text-white leading-10">
                        Geneva
                      </a>
                      <ul className="text-transparent list-disc list-inside">
                        <li>
                          <a href="" className="text-white leading-5">
                            Ru de stand
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-white leading-5">
                            Mont-Blanc 17
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-white leading-5">
                            Eaux-Vives
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-white leading-5">
                            Plainpalais
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-white leading-5">
                            Ru de stand
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="text-white leading-10">
                        Zürich
                      </a>
                      <ul className="text-transparent list-disc list-inside">
                        <li>
                          <a href="" className="text-white leading-5">
                            Talacker
                          </a>
                        </li>
                        <li>
                          <a href="" className="text-white leading-5">
                            Oerlikon
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  className={`h-full flex justify-center items-center  ${
                    listItemHover == 'shop'
                      ? 'border-y-[3px] border-b-[#f78f1e] border-t-transparent'
                      : ''
                  }`}
                  onMouseOver={() => {
                    setListItemHover('shop')
                  }}
                  onMouseOut={() => {
                    setListItemHover('')
                  }}
                >
                  <a
                    href=""
                    className={`${
                      scrollMode == true ? 'text-black' : 'text-white'
                    } ${
                      listItemHover == 'shop' ? 'text-[#f78f1e]' : ''
                    } font-bold font-sans text-sm px-3 border-r`}
                  >
                    SHOP
                  </a>
                  <ul
                    className={`${
                      listItemHover != 'shop' && 'hidden'
                    } list-disc list-inside text-[#f78f1e] text-sm font-mono`}
                  >
                    <li>
                      <a href="" className="text-white leading-10">
                        Beans
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-white leading-5">
                        Merchandise
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className={`h-full flex justify-center items-center  ${
                    listItemHover == 'catering'
                      ? 'border-y-[3px] border-b-[#f78f1e] border-t-transparent'
                      : ''
                  }`}
                  onMouseOver={() => {
                    setListItemHover('catering')
                  }}
                  onMouseOut={() => {
                    setListItemHover('')
                  }}
                >
                  <a
                    href=""
                    className={`${
                      scrollMode == true ? 'text-black' : 'text-white'
                    } ${
                      listItemHover == 'catering' ? 'text-[#f78f1e]' : ''
                    } font-bold font-sans text-sm px-3 border-r`}
                  >
                    COFFEE CATERING
                  </a>
                </li>
                <li
                  className={`h-full flex justify-center items-center  ${
                    listItemHover == 'terms'
                      ? 'border-y-[3px] border-b-[#f78f1e] border-t-transparent'
                      : ''
                  }`}
                  onMouseOver={() => {
                    setListItemHover('terms')
                  }}
                  onMouseOut={() => {
                    setListItemHover('')
                  }}
                >
                  <a
                    href=""
                    className={`${
                      scrollMode == true ? 'text-black' : 'text-white'
                    } ${
                      listItemHover == 'terms' ? 'text-[#f78f1e]' : ''
                    } font-bold font-sans text-sm px-3 border-r`}
                  >
                    TERMS & CONDITIONS
                  </a>
                </li>
              </ul>
              {/* ------------------------------------------------------------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
