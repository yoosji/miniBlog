import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* =>리액트의 strict모드는 개발 모드임
    =>개발시 버그를 찾을수 있게 해주는 컴포넌트
    =>제품모드 동작하지 않음
    =>props가 없고 부모에서 strict모드로 선언되면
    모든 자식에 대해서 strict모드가 실행됨
    =>컴포넌트가 불완전하 랜더링으로 인한
    버그를 찾기 위해서 재랜더리함
    (항상 랜더링을 두번 호출함)
    =>불 필요한 div 형식의 부모 태그를 줄일 수 있음 */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
