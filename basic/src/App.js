// 主应用入口文件
import { Router, Link } from '@reach/router'
import './App.css';
import Home from './home'
function App() {
  return (
    <div className="">
      <header className="">
        react parent app
      </header>
      <nav>
        { /*// 添加路由 切换微应用以及 主应内容 */}
        <Link to="/">Home</Link> |{" "}
        <Link to="/reactApp">children</Link>
      </nav>
      <Router>
        <Home path="/" />
      </Router>
        {/*// 显示子应用*/}
      <div className="layout">
          <div id="reactApp">children</div>
        </div>
    </div>
  );
}

export default App;