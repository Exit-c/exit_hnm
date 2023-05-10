import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';

//1. 전체상품페이지, 로그인페이지, 상품디테일페이지 (Router page 만들기)
//1-1. 네비게이션바 만들기
//2. 전체 상품 페이지에서는 전페상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//3. 상품디테일을 눌렀으나, 로그인이 안돼있을 경우에는 로그인 페이지가 나온다.
//4. 로그인이 되어있을 경우에는 상품디테일 페이지를 볼 수 있다.
//5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//5. 로그아웃이 되면 상품 디테일을 볼 수 없다. 다시 로그인하면 페이지가 보인다.
//6. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인 글씨가 보인다.
//7. 상품 검색이 가능하다.
// json-server --watch db.json --port 4000
function App() {
  const [authenticate, setAuthenticate] = useState(false); // true면 로그인이 됨 false면 로그인이 안 됨.
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
