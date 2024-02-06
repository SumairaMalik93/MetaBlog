import Layout from "./Assets/Layout";
import Home from "./Pages/Home";
import BlogListing from "./Pages/BlogListing";
import SinglePost from "./Pages/SinglePost";
import AuthorPage from "./Pages/AuthorPage";
import Page from "./Pages/Page";

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/single-post" element={<SinglePost />} />
          <Route path="/Page" element={<Page />} />
          <Route path="/author-page" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
