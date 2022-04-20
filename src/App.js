import React from 'react';
import HomePage from './screens/HomePage/HomePage';
import BlogPage from './screens/BlogPage/BlogPage';
import CreateBlog from './screens/CreateBlog/CreateBlog';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (    
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/create" element={<CreateBlog />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
