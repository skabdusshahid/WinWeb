// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Http from '../../../AdminPanel/src/Http';

// const ExpertNxt = () => {
//     const [experts, setExperts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchExperts = async () => {
//             try {
//                 const response = await axios.get(`${Http}/experts`); // Replace with your API endpoint
//                 setExperts(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err);
//                 setLoading(false);
//             }
//         };

//         fetchExperts();
//     }, []);


//     const [basicData, setBasicData] = useState([]);
//   const [basicError, setBasicError] = useState(null);

//  useEffect(() => {
//     // Fetch basic data from the API
//     const fetchBasicData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/basic');
//         setBasicData(response.data);
//       } catch (err) {
//         setBasicError('Error fetching basic data');
//         console.basicError(err);
//       }
//     };

//     fetchBasicData();
//   }, []);

//   const getFileNameFromPath = (filePath) => {
//     if (!filePath) return ''; // Handle null or undefined filePath
//     const normalizedPath = filePath.replace(/\\/g, '/');
//     return normalizedPath.split('/').pop();
//   };



//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error loading data: {error.message}</div>;

//     return (
//         <section id="Team" className="gap">
//             <div className="container">
//                 <div className="heading">
//                     <span>Dedicated To The People</span>
//                     <h2>Meet Our Expert Team</h2>
//                 </div>
//                 <div className="row">
//                     {experts.map((expert, index) => (
//                         <div key={index} className="col-lg-4 col-md-6">
//                             <div className="team-text">
//                                 <div className="team-img">
//                                     <img alt={expert.name} src={expert.image ? `${Http}/uploads/${getFileNameFromPath(expert.image)}` : 'default-image-url'} // Fallback image URL
//  />
//                                 </div>
//                                 <span>{expert.designation}</span>
//                                 <h5>{expert.name}</h5>
//                                 <div className="callto">
//                                     <i>
//                                         <svg
//                                             fill="none"
//                                             height="112"
//                                             viewBox="0 0 24 24"
//                                             width="112"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <g clipRule="evenodd" fill="rgb(0,0,0)" fillRule="evenodd">
//                                                 <path d="m7 2.75c-.41421 0-.75.33579-.75.75v17c0 .4142.33579.75.75.75h10c.4142 0 .75-.3358.75-.75v-17c0-.41421-.3358-.75-.75-.75zm-2.25.75c0-1.24264 1.00736-2.25 2.25-2.25h10c1.2426 0 2.25 1.00736 2.25 2.25v17c0 1.2426-1.0074 2.25-2.25 2.25h-10c-1.24264 0-2.25-1.0074-2.25-2.25z"></path>
//                                                 <path d="m10.25 5c0-.41421.3358-.75.75-.75h2c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-2c-.4142 0-.75-.33579-.75-.75z"></path>
//                                                 <path d="m9.25 19c0-.4142.33579-.75.75-.75h4c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-4c-.41421 0-.75-.3358-.75-.75z"></path>
//                                             </g>
//                                         </svg>
//                                     </i>
//                                     <a href={`tel:${expert.phone}`}>{expert.phone}</a>
//                                 </div>
//                                 <div className="follow">
//                                     <a href="#">
//                                         <img alt="follow" src="assets/img/follow.png" />
//                                     </a>
//                                     <ul className="social-media-icon">
//                                         <li>
//                                             <a href={expert.fb_link}>
//                                                 <FontAwesomeIcon icon={faFacebookF} className="icon" />
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a href={expert.x_link}>
//                                                 <FontAwesomeIcon icon={faTwitter} className="icon" />
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a href={expert.linkedin_link}>
//                                                 <FontAwesomeIcon icon={faLinkedin} className="icon" />
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {basicData && basicData.map((basic,index)=>{
//                     return <div key={index} className="row">
//                     <div className="col-lg-3 col-sm-6">
//                         <div className="count-style">
//                             <h2 data-max="1">{basic.count_value1}
//                                 <sup>K</sup>
//                             </h2>
//                             <span>{basic.count_title1}</span>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-sm-6">
//                         <div className="count-style">
//                             <h2 data-max="15">{basic.count_value2}
//                                 <sup>m</sup>
//                             </h2>
//                             <span>{basic.count_title2}</span>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-sm-6">
//                         <div className="count-style">
//                             <h2 data-max="43">{basic.count_value3}
//                                 <sup>+</sup>
//                             </h2>
//                             <span>{basic.count_title3}</span>
//                         </div>
//                     </div>
//                     <div className="col-lg-3 col-sm-6">
//                         <div className="count-style">
//                             <h2 data-max="12">{basic.count_value4}
//                                 <sup>m</sup>
//                             </h2>
//                             <span>{basic.count_title4}</span>
//                         </div>
//                     </div>
//                 </div>
//                 })}


//             </div>
//         </section>
//     );
// };

// export default ExpertNxt;

import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';
import Http from '../Http';

import "bootstrap/dist/css/bootstrap.min.css";
import '../../assets/css/jquery.fancybox.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';

import './ExportNxt.css'

const TeamSection = () => {
    const [experts, setExperts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExperts = async () => {
            try {
                const response = await axios.get(`${Http}/experts`);
                setExperts(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchExperts();
    }, []);

    const getFileNameFromPath = (filePath) => {
        if (!filePath) return '';
        const normalizedPath = filePath.replace(/\\/g, '/');
        return normalizedPath.split('/').pop();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading experts.</p>;

    return (
        <section id="team" className="gap">
            <div className="container">
                <div className="heading">
                    <span>Dedicated To The People</span>
                    <h2>Meet Our Expert Team</h2>
                </div>
                <div className="row">
                    {experts.length === 0 ? (
                        <div className="col text-center">
                            <p>No experts available.</p>
                        </div>
                    ) : (
                        experts.map((expert) => (
                            <div key={expert._id} className="col-lg-4 col-md-6 mb-4">
                                <div className="team-text">
                                    <div className="team-img">
                                        <img
                                            alt={expert.name}
                                            src={expert.image ? `${Http}/uploads/${getFileNameFromPath(expert.image)}` : 'default-image-url'}
                                        />
                                    </div>
                                    <span>{expert.designation}</span>
                                    <h5>{expert.name}</h5>
                                    <div className="callto">
                                        <i>
                                            <svg
                                                fill="none"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipRule="evenodd" fill="rgb(0,0,0)" fillRule="evenodd">
                                                    <path d="m7 2.75c-.41421 0-.75.33579-.75.75v17c0 .4142.33579.75.75.75h10c.4142 0 .75-.3358.75-.75v-17c0-.41421-.3358-.75-.75-.75zm-2.25.75c0-1.24264 1.00736-2.25 2.25-2.25h10c1.2426 0 2.25 1.00736 2.25 2.25v17c0 1.2426-1.0074 2.25-2.25 2.25h-10c-1.24264 0-2.25-1.0074-2.25-2.25z" />
                                                    <path d="m10.25 5c0-.41421.3358-.75.75-.75h2c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-2c-.4142 0-.75-.33579-.75-.75z" />
                                                    <path d="m9.25 19c0-.4142.33579-.75.75-.75h4c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-4c-.41421 0-.75-.3358-.75-.75z" />
                                                </g>
                                            </svg>
                                        </i>
                                        <a href={`tel:${expert.phone}`}>{expert.phone}</a>
                                    </div>
                                    <div className="follow">
                                        <ul className="social-media-icon">
                                            {expert.fb_link && (
                                                <li>
                                                    <a href={expert.fb_link} target="_blank" rel="noopener noreferrer">
                                                        <FaFacebookF className="icon" />
                                                    </a>
                                                </li>
                                            )}
                                            {expert.x_link && (
                                                <li>
                                                    <a href={expert.x_link} target="_blank" rel="noopener noreferrer">
                                                        <FaTwitter className="icon" />
                                                    </a>
                                                </li>
                                            )}
                                            {expert.linkedin_link && (
                                                <li>
                                                    <a href={expert.linkedin_link} target="_blank" rel="noopener noreferrer">
                                                        <FaLinkedin className="icon" />
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                        <button className="btn btn-warning" onClick={() => handleEditClick(expert)}>
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="count-style">
                            <h2 data-max="1"><sup>K</sup></h2>
                            <span>completed projects</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="count-style">
                            <h2 data-max="15"><sup>m</sup></h2>
                            <span>Customer Satisfaction</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="count-style">
                            <h2 data-max="43"><sup>+</sup></h2>
                            <span>Team members</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="count-style">
                            <h2 data-max="12"><sup>m</sup></h2>
                            <span>Customer Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
