import React from 'react';
import './App.css'; // Optional: Your global CSS
import MainContent from './components/MainContent';
import JobPost from './components/JobPost';
import Freelancers from './components/Freelancers';
import WebsitePrivileges from './components/WebsitePrivileges';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <MainContent/>
      <JobPost />
      <Freelancers />
      <WebsitePrivileges/>
      <Footer/>
    </div>
  );
}

export default App;
