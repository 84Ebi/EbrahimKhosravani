import { useEffect, useState } from 'react';
import './App.css';
import {
  a,
  anbg,
  anbg1,
  b,
  github,
  mail,
  linkedin,
  resume1,
  telegram,
  windows1,
} from "./images";



const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const navigateToHome = () => setCurrentPage("Home");
  const navigateToContact = () => setCurrentPage("Contact");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data, etc.)
    setTimeout(() => {
      setIsLoading(false);
    }, 2230); // Adjust the loading time as needed
  }, []);

  return (
    <>
      {isLoading ? (
        <div className=' bg-black max-h-full' >
          <img src={windows1} alt="loading" className=' max-h-fit'/>
          <img src={a} className='notshown'/>
          <img src={b} className='notshown'/>
          <img src={github} className='notshown'/>
          <img src={linkedin} className='notshown'/>
          <img src={mail} className='notshown'/>
          <img src={anbg} className='notshown'/>
          <img src={anbg1} className='notshown'/>
          <img src={telegram} className='notshown'/>
        </div>
        
        
      ) : (
        <>
          

          {currentPage === "Home" && (
            <div className=''>
              <div className="window-body max-w-full">

                <div className='fixed align bg-white'>
                    <menu role="tablist">
                      <li role="tab" className="cursor-pointer text-xl" aria-selected="true">
                        <a onClick={navigateToHome}>Home</a>
                      </li>

                      <li role="tab" className="cursor-pointer text-xl" aria-selected="false">
                        <a onClick={navigateToContact}>Contact</a>
                      </li>
                    </menu>
                  <div className='fixed top-0 right-3 window '>
                      <img src={a} className='w-10'/>
                  </div>
                </div>
                <div className='right-2 z-50 mt-10 fixed'>
                    <ul className="tree-view ">
                      <li><a href="#aboutme">About Me</a></li>
                      <li><a href="#dresume">My resume</a></li>
                      <li>
                        <details>
                          <summary><a href="#skills">Skills</a></summary>
                          <ul>
                            <li><a href='#English'>English</a></li>
                            <li><a href='#React'>React</a></li>
                            <li><a href='#Html & CSS'>Html & CSS</a></li>
                            <li><a href='#Java Script'>Java Script</a></li>
                            <li><a href='#Type Script'>Type Script</a></li>
                            <li><a href='#Python'>Python</a></li>
                            <li><a href='#Docker'>Docker</a></li>
                            <li><a href='#Django'>Django</a></li>
                            <li><a href='#Node.js'>Node.js</a></li>
                          </ul>
                        </details>
                      </li>
                      <li><a href='#info'>Contact Info</a></li>
                      
                    </ul>
                  </div>
                <div className=" relative top-10 mb-12 ">
                  <div className="window h-auto">
                    <div className="window">
                      <div className="title-bar">
                        <div className="title-bar-text text-xl" id="aboutme">
                          Ebrahim Khosravani <br />
                          Full Stack Developer
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center pb-5 pt-5">

                      <div className="window w-full">
                        <div className="items-center text-center">
                          <div className="window items-center">
                            <div className="title-bar">
                              <div className="title-bar-text text-sm"><b >About Me</b></div>
                            </div>
                            <div className="window-body text-lg">
                              <p>
                                I am Ebrahim Khosravani,<br></br> a <b>Fullstack Developer with a strong academic foundation in Physics from Sharif University of Technology.</b> My primary expertise lies in developing <b>web applications</b>, where I excel at both front-end technologies like<b> React, HTML, and CSS, and back-end frameworks such as Django and Node.js.</b> I am proficient in <b>TypeScript, Python,</b> and a range of tools essential for building scalable and efficient web solutions. With a passion for creating seamless, user-centric digital experiences, I have honed my skills through advanced courses and hands-on projects, particularly in the development of web applications. My background also includes knowledge in AI and a variety of software tools.
                              </p>
                            </div>

                          </div>

                        </div>
                      </div>

                    </div>

                    <div className='pt-8 pb-5 justify-center flex '>
                            <div className="window justify-center">
                              <div className="title-bar">
                                <div className="title-bar-text text-sm"><b id="skills">skills</b></div>
                                <div className="title-bar-controls">
                                </div>
                              </div>
                              <div className="window">
                                <div className=' '>
                                  <div className=" text-sm">

                                    <div className='field-row w-full mt-16 mb-6'>
                                      <p className='w-24 ml-3'  id='English'>English</p>
                                      <input id="range26" type="range" min="1" max="7" value="6" />
                                      <p className='mr-3'>C1</p>
                                      
                                    </div>

                                    <div className='field-row w-full mt-6 mb-6'>
                                      <p className='w-24 ml-3'  id='React'>React</p>
                                      <input id="range26" type="range" min="1" max="12" value="11" />
                                      <p className='mr-3'>Advanced</p>
                          
                                    </div>

                                    <div className='field-row w-full mt-6 mb-6'>
                                      <div className='w-24 ml-3' id='Html & CSS'>Html & CSS</div>
                                      <input id="range26" type="range" min="1" max="9" value="8" />
                                      <p className='mr-3'>Advanced</p>
                                          
                                      </div>

                                    <div className='field-row w-full mt-6 mb-6'>
                                      <p className='w-24 ml-3' id='Java Script'>Java Script</p>
                                      <input id="range26" type="range" min="1" max="9" value="8" />
                                      <p className='mr-3'>Advanced</p>
                                      
                                      </div>

                                    <div className='field-row w-full mt-6 mb-6'>
                                      <p className='w-24 ml-3'  id='Type Script'>Type Script</p>
                                      <input id="range26" type="range" min="1" max="14" value="13" />
                                      <p className='mr-3'>Advanced</p>
                                      
                                      </div>

                                    <div className='field-row w-full mt-6 mb-6'>
                                      <div className='w-24 ml-3'  id='Python'>Python</div>
                                      <input id="range26" type="range" min="1" max="12" value="9" />
                                      <p className='mr-3'>Intermediate</p>
                                      
                                      </div>

                                    <div className='field-row w-full mt-6 mb-6'>
                                      <p className='w-24 ml-3'  id='Docker'>Docker</p>
                                      <input id="range26" type="range" min="1" max="14" value="10" />
                                      <p className='mr-3'>Intermediate</p>
                                      
                                      </div>

                                    <div className='field-row w-full mt-6 mb-6'>
                                      <p className='w-24 ml-3'  id='Django'>Django</p>
                                      <input id="range26" type="range" min="1" max="9" value="6" />
                                      <p className='mr-3'>Intermediate</p>
                                      
                                      </div>

                                    <div className='field-row w-full mt-6 mb-16'>
                                      <p className='w-24 ml-3'  id='Node.js'>Node.js</p>
                                      <input id="range26" type="range" min="1" max="9" value="4" />
                                      <p className='mr-3'>Basic</p>
                                      
                                    </div>
                                    
                                  </div>
                                </div>

                              </div>
                              
                            </div>
                            <div className='justify-around ml-2' id="dresume">
                              <button  className='w-28 h-12 ' >
                                <a href={resume1}  download>Download Resume </a>
                              </button>
                              <div className='window w-28 mt-6'>
                                <img src={b}></img>
                              </div>
                            </div>
                      </div>


                  </div>


                  
                </div>


                <div id='info' className='flex mt-1 w-full relative'>
                        <div className="title-bar text-sm w-full">
                          <div className='w-full justify-around mt-6 mb-6 inline-flex'>

                            <div className='title-bar-text text-center'>
                                  Ebrahim Khosravani
                                  
                            </div>

                            <div className="title-bar-text  text-center -indent-4">
                                  Email<br></br> 
                              <address >
                                    <a href='mailto:ebrahimkhosravani3@gmail.com'>
                                      ebrahimkhosravani3@gmail.com
                                    </a>
                              </address>
                            </div>


                          </div>
                        </div>
                      </div>
              </div>
            </div>

          )}


          {currentPage === "Contact" && (
          <div className=' '>
            <div className="window-body max-w-full">

                <div className='fixed align bg-white'>
                    <menu role="tablist">
                      <li role="tab" className="cursor-pointer text-xl" aria-selected="false">
                        <a onClick={navigateToHome}>Home</a>
                      </li>

                      <li role="tab" className="cursor-pointer text-xl" aria-selected="true">
                        <a onClick={navigateToContact}>Contact</a>
                      </li>
                    </menu>
                  <div className='fixed top-0 right-3 window '>
                      <img src={a} className='w-10'/>
                  </div>
                </div>
            <div className="relative top-10 mb-12">
              <div className="window h-auto">
                <div className="window">
                  <div className="title-bar">
                    <div className="title-bar-text text-xl" >
                      Contact Info
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pb-5 pt-5">

                  <div className="window w-full mr-52 ml-52">
                    <div className="items-center text-center">
                      <div className="window items-center">
                        <div className="title-bar">
                          <div className="title-bar-text text-sm"><b >Socials</b></div>
                        </div>
                        <div className="window-body text-lg">
                          <div className='inline mt-10 mb-10'>
                            <button className='flex w-full justify-center items-center mt-2 mb-2 h-16' onClick={() => window.open('https://www.linkedin.com/in/ebrahim-khosravani-6a5bbb177', '_blank')}><img className='ml-4 mr-2 mb-3 mt-2 w-8 ' src={linkedin}></img>Linkedin</button>                            
                            <button className='flex w-full justify-center mt-2 items-center h-16' onClick={() => window.open('https://github.com/84Ebi', '_blank')}><img className='w-10 mb-3 mt-2' src={github}></img>Github</button>
                            <button className='flex w-full justify-center mt-2 items-center h-16 text-xl ' onClick={() => window.open('mailto:ebrahimkhosravani3@gmail.com', '_blank')}><img className='w-10 mb-3 mt-2 ml-3' src={mail}></img><p className=' mr-3'>ebrahimkhosravani3@gmail.com</p></button>
                            <button className='flex w-full justify-center mt-2 mb-1 items-center h-16' onClick={() => window.open('https://t.me/ebisssss', '_blank')}><img className='w-10 mb-3 mt-2' src={telegram}></img>Telegram</button>


                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>


              </div>


              
            </div>
            <div id='info' className='flex mt-1 w-full relative'>
                        <div className="title-bar text-sm w-full">
                          <div className='w-full justify-around mt-6 mb-6 inline-flex'>

                            <div className='title-bar-text text-center'>
                                  Ebrahim Khosravani
                                  
                            </div>

                            <div className="title-bar-text  text-center -indent-4">
                                  Email<br></br> 
                              <address >
                                    <a href='mailto:ebrahimkhosravani3@gmail.com'>
                                      ebrahimkhosravani3@gmail.com
                                    </a>
                              </address>
                            </div>


                          </div>
                        </div>
                      </div>
            </div>


          </div>

          )}
        </>
      )}
    </>
  );
};

export default App;
