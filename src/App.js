import React from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import JobPost from './components/JobPost';
import Freelancers from './components/Freelancers';
import WebsitePrivileges from './components/WebsitePrivileges';
function App() {
  return (
    <div className="App">
      
      <MainContent />
      
      <JobPost />
      <Freelancers/>
      <WebsitePrivileges />
      <Footer />
    </div>
  );
}

export default App;
