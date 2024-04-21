import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import {UserContextProvider } from './context/UserContext';
import {
  Route, Routes,
} from "react-router-dom";

function App() {
  return ( 
    <> 
    <UserContextProvider>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<AboutUs/>}/>
      <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/write" element={<CreatePost/>}/>
      <Route exact path="/edit/:id" element={<EditPost/>}/>
      <Route exact path="/profile/:id" element={<Profile/>}/>
      </Routes>
          {/* <Router>
        <Switch>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/blog">
            <Blog/>
          </Route>
          <Route exact path="/write">
            <CreatePost/> 
          </Route>
          <Route exact path="/edit/:id">
            <EditPost/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router> */}
      </UserContextProvider>
    </>
  );
}
export default App;
