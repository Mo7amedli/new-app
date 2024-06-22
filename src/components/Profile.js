import React from 'react';
import { FaCamera, FaGlobe, FaCode, FaMapMarkerAlt, FaDollarSign, FaExternalLinkAlt } from 'react-icons/fa'; // Importing Font Awesome icons
import './Profile.css'; // Import the CSS file

const Profile = () => {
  return (
    <div className="container">
    

      <div className="main-content">
        <div className="left-panel">
          <img
            src="/assets/pic2.jpg" // Adjust path based on your project structure
            alt="Profile"
            className="profile-img"
          />
          

          <div className="languages">
            <FaGlobe className="icon" /> <strong>LANGUAGES</strong>
            <ul>
              <li>English</li>
              <li>Spanish</li>
              <li>French</li>
            </ul>
          </div>

          <div className="skills">
            <FaCode className="icon" /> <strong>SKILLS</strong>
            <ul>
              <li>Web Designer</li>
              <li>Web Developer</li>
              <li>WordPress</li>
              <li>WooCommerce</li>
              <li>PHP, .Net</li>
            </ul>
          </div>
        </div>

        <div className="right-panel">
          <h3>Kshiti Ghelani</h3>
          <p>
            <a href="link_to_profile" className="profession-link">
              Web Developer and Designer
            </a>
          </p>
          <p className="location">
            <FaMapMarkerAlt className="icon" /> Location: New York, USA
          </p>
          <div className="rating">
            <span>Rating:</span>
            <span className="stars">⭐⭐⭐⭐</span>
          </div>

          <div className="about-section">
            <p className="about-title">About</p>
            <div className="horizontal-line"></div>
            <div className="about-content">
              <p>
                Experienced web developer with a passion for creating modern and
                responsive web applications.
              </p>
              <p>
                <FaDollarSign className="icon" /> <strong>Hourly Rate:</strong> $50/hr
              </p>
              <p>
                <strong>Portfolio:</strong>{' '}
                <a href="link_to_portfolio" className="portfolio-link">
                  View Portfolio <FaExternalLinkAlt className="icon" />
                </a>
              </p>
            </div>
          </div>

          <div className="tabs">
            <div className="tab">
              <input type="radio" id="tab-about" name="tab-group" defaultChecked />
              <label htmlFor="tab-about">About</label>

              <div className="content">
                <table>
                  <tbody>
                    <tr>
                      <th>User Id</th>
                      <td>Kshiti123</td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>Kshiti Ghelani</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>kshtighelani@gmail.com</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>123 456 7890</td>
                    </tr>
                    <tr>
                      <th>Profession</th>
                      <td>Web Developer and Designer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tab">
              <input type="radio" id="tab-timeline" name="tab-group" />
              <label htmlFor="tab-timeline">Timeline</label>
              <div className="content">
                <p>Timeline content goes here...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
