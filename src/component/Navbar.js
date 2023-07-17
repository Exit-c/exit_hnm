import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const StyleHeader = styled.header`
  .login {
    display: flex;
    justify-content: flex-end;
    margin: 30px;
  }
  .my-custom-class {
    font-size: 18px;
  }
  .login div {
    margin-left: 10px;
    cursor: pointer;
  }
  .herder-logo {
    display: flex;
    justify-content: center;
  }
  .herder-logo img {
    width: 80px;
    cursor: pointer;
  }
  .nav {
    display: flex;
    justify-content: center;
    list-style: none;
  }
  .nav li {
    padding: 20px;
  }
  .search {
    display: flex;
    justify-content: flex-end;
    margin-top: -40px;
    margin-right: 20px;
  }
  .search input {
    margin-left: 10px;
    outline: none;
    border: none;
    border-bottom: 1px solid #333;
  }
`;

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navList = [
    '여성',
    'Divied',
    '남성',
    '신생아/유아',
    '아동',
    'H&M HOME',
    '스포츠',
    'Sale',
    '지속가능성',
  ];

  const navigate = useNavigate();

  // 로그인 페이지 이동 및 로그아웃하면 홈화면으로 이동
  const goToLogin = () => {
    if (authenticate !== true) {
      navigate(`/login`);
    } else {
      setAuthenticate(false);
      navigate(`/`);
    }
  };

  // 검색하여 쿼리생성
  const search = (e) => {
    if (e.key === 'Enter') {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  // 메인로고 클릭시 홈으로 이동
  const goToHome = () => {
    navigate(`/`);
  };

  return (
    <StyleHeader>
      <div className="login">
        <FontAwesomeIcon icon={faUser} className="my-custom-class" />
        <div onClick={goToLogin}>
          {authenticate !== true ? '로그인' : '로그아웃'}
        </div>
      </div>
      <div className="herder-logo">
        <h1>
          <img
            onClick={goToHome}
            src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F61%2Fbe%2F26%2F61be2666033c44cd89776534946281c1.png&type=a340"
          />
        </h1>
      </div>
      <div className="container">
        <ul className="nav">
          {navList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyDown={(e) => search(e)} />
        </div>
      </div>
    </StyleHeader>
  );
};

export default Navbar;
