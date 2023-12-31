import "./Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import CartIcon from "../icon/icon-shopping-cart.png";
import ListIcon from "../icon/icon-ui.png";

import Cart from "../cart/Cart";
import Qr from "./Qr";
import Dropdown from "./Dropdown";

function Header({ logoText }) {
  const [isDropdownView, setDropdownView] = useState(false); // 드롭다운을 위한 함수 정의

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  return (
    <header>
      <div className="header-menu">
        <div className="back">
          <button className="back-button" style={{ color: "rgba(0,0,0,0)" }}>
            　&gt;
          </button>
        </div>
        <div className="nickname" id="menu_nickname">
          닉네임
        </div>
        {/* 나중에 연결 */}
        <div className="logo-page">
          <div className="logo">{logoText}</div> {/* 페이지 이름 */}
          <div className="icon-wrap">
            <div className="icon">
              {/* 아이콘 모음 */}
              <div className="cart">
                {/* 장바구니 */}
                <div className="cart-button">
                  <Link to="/cart">
                    {Cart}
                    <img src={CartIcon} className="header-cart-button-icon" alt="Cart" />
                  </Link>
                </div>
              </div>
              <div className="qr">
                {/* QR코드 */}
                <Qr /> {/* 모달창 띄우는 컴포넌트 */}
              </div>
              <div className="list" onBlur={handleBlurContainer}>
                {/* 메뉴 드롭다운_onBlur 사용 */}
                <button className="list-button" onClick={handleClickContainer}>
                  <img src={ListIcon} className="header-list-button-icon" alt="List" />
                  {isDropdownView && <Dropdown />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
