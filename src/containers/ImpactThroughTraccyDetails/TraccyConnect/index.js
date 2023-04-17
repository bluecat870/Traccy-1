import React, { useRef } from 'react';
import { Container, Row, Col, SvgIcon } from '../../../components/common';
import { Drawer, Tabs } from 'antd';
import { useMediaQuery } from 'react-responsive'
import PageFlip from 'react-pageflip';
import './index.scss';

import { Link, useHistory } from 'react-router-dom';

import MapImg from '../../../assets/images/map.png';
import PopupImg1 from '../../../assets/images/popup-img1.jpg';
import PopupImg2 from '../../../assets/images/popup-img2.jpg';
import PopupImg3 from '../../../assets/images/popup-img3.jpg';
import { useState } from 'react';
import { Sliders } from '../../ImpactThroughTraccy';

const items = [
  {
    key: '1',
    label: `Bussiness`,
  },
  {
    key: '2',
    label: `Financial`,
  },
  {
    key: '3',
    label: `STO`,
  },
  {
    key: '4',
    label: `Roadmap`,
  },
];

const TraccyConnect = () => {
  const router = useHistory();
  const [showContent1, setShowContent1] = React.useState(false);
  const [showContent2, setShowContent2] = React.useState(false);
  const [showContent3, setShowContent3] = React.useState(false);
  const smallDeviceBook = useMediaQuery({ query: '(max-width: 991px)' })
  const hideModal = () => {
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(false);
  }
  const showModal1 = () => {
    setShowContent1(true);
    setShowContent2(false);
    setShowContent3(false);
  };
  const showModal2 = () => {
    setShowContent2(true);
    setShowContent1(false);
    setShowContent3(false);
  };
  const showModal3 = () => {
    setShowContent3(true);
    setShowContent1(false);
    setShowContent2(false);
  };

  const [openModal, setOpen] = useState(false);
  const [stageIndex, setStageIndex] = useState(0);
  const onConnect = (index) => {
    setOpen(true);
    setStageIndex(index)
  }

  const onClose = () => {
    if (openModal)
      setOpen(false)
  }

  const goDetail = (project, index) => {
    if (project.route)
      router.push(`/impact-through-traccy-details/${project.route}`)
    else
      router.push(`/impact-through-traccy-details/${stageIndex}/${index}`)
  }

  const bookRef = useRef();
  const prevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  }
  const nextPage = () => {
    bookRef.current.pageFlip().flipNext()
  }

  const [tab, setTab] = useState("1");
  console.log(tab)
  return (
    <div className='traccyconnect-wrapper' onClick={onClose}>
      <section className='banner-section'>
        <div className='about-banner' style={{ backgroundImage: "url(/impact/flyout.png)" }}></div>
        <Link to='/impact-through-traccy' className='backarrow'>
          <img src="/impact/backarrow.svg" alt="backarrow" />
        </Link>
        <div>
          <Container>
            <div className="stage-wrapper">
              <div className="stage-main">
                <div className="stage-left">
                  <h1>
                    FlyOUT
                  </h1>
                  <span className="desc">We are changing the Solar Technology</span>
                  <span className="application">Fundraising required</span>
                  <div className="selection">
                    <span className="number">3’230’000 $</span>
                  </div>
                  <div className="project-list-button" onClick={() => onConnect(0)}>
                    <div className="list-indicator" />
                    <span>Project List</span>
                  </div>
                </div>
                <div className="stage-right">
                  <div className="processing"><span>Processing Time</span></div>
                  <div className="processing-desc">
                    <span>9</span>
                    <span>month</span>
                  </div>
                  <div className="world"><span>Break Event Point</span></div>
                  <div className="world-desc">
                    <span>18</span>
                    <span>months</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Drawer
          title={false}
          placement='right'
          width={"100%"}
          onClose={onClose}
          closeIcon={false}
          open={openModal}
          rootClassName='project-sidebar'
        >
          <div className="project-list">
            <div className="title">
              <span>Project List</span>
            </div>
            {Sliders[stageIndex].projects.map((project, index) => (
              <div className="item" onClick={() => goDetail(project, index)}>
                <span>{project.number}</span>
                <span>{project.desc}</span>
              </div>
            ))}
          </div>
        </Drawer>
      </section>
      <section className='book-section'>
        <Container>
          <Row>
            <Col>
              <PageFlip width={300} height={smallDeviceBook ? 400 : 160} size={smallDeviceBook ? 'fixed' : 'stretch'} useMouseEvents={false} ref={bookRef}>
                <div className="demoPage">
                  <div className='bookpage-inner-left'>
                    <div className="row">
                      <div className="left-section">
                        <h2>FlyOut</h2>
                        <img src="/impact/mosquito-solution.png" alt="mosquito" />
                      </div>
                      <div className="right-section">
                        <img src="/impact/mosquito7.png" alt="mosquito" />
                      </div>
                      <div className='arrow-right-sm' onClick={nextPage}>
                        <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="demoPage">
                  <div className='bookpage-inner-right'>
                    <div className='arrow-left-sm' onClick={prevPage}>
                      <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                    </div>
                    <div className="row">
                      <div className='left-col'>
                        <div className='left-upper'>
                          <h4>Mosquito System</h4>
                          <p>
                            Our automatic misting system for mosquito control is a type of insect control system that uses a combination of water and insecticide to create a mist that kills mosquitoes and other flying insects. The misting system is installed in an outdoor area, such as a backyard or patio, and is typically controlled by a timer or a remote control.
                          </p>
                        </div>
                        <div className='left-bottom'>
                          <h1>18</h1>
                          <div className='small-head'>
                            <p>Construction period</p>
                            <h4>Months</h4>
                          </div>
                        </div>
                      </div>
                      <div className='right-col'>
                        <img src="/impact/mosqmachine3.png" alt="machine" />
                      </div>
                    </div>
                    <div className='arrow-right' onClick={nextPage}>
                      <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                    </div>
                  </div>
                </div>
                <div className="demoPage">
                  <div className='bookpage-inner-left'>
                    <div className="row">
                      <div className='arrow-left' onClick={prevPage}>
                        <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                      </div>
                      <div className="left-section notfirst">
                        <h2>FlyOut</h2>
                        <img src="/impact/mosquito-solution.png" alt="mosquito" />
                      </div>
                      <div className="right-section notfirst">
                        <span>
                          First organic<br />
                          solution for reduce<br />
                          mosquito population
                        </span>
                      </div>
                      <div className='arrow-right-sm' onClick={nextPage}>
                        <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                      </div>
                    </div>
                    <div className="row">
                      <div className="tab-section notfirst">
                        <Tabs defaultActiveKey="1" items={items} onChange={(activeKey) => setTab(activeKey)} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="demoPage">
                  <div className='bookpage-inner-right'>
                    <div className='arrow-left-sm' onClick={prevPage}>
                      <SvgIcon name='circle-bottom' viewbox='0 0 51 50.998' />
                    </div>
                    {tab === "1" &&
                      <div className="second">
                        <h1>Business Model</h1>
                        <p>Reduce the mosquito population with habing in the same time reduction of sickness like Malaria or Dengue.</p>
                        <div className="second-row">
                          <img src="/impact/business-model.png" alt="bussiness" />
                          <div className="second-col">
                            <h1>Estimation</h1>
                            <p>Sickness reduction</p>
                            <h2>2.2 Milion cases </h2>
                            <p>Hospitalisation saving cost</p>
                            <h2>$ 660 Milion  </h2>
                          </div>
                        </div>
                      </div>
                    }
                    {tab === "2" &&
                      <div className="third">
                        <h1>Financial</h1>
                        <div className="third-row first">
                          <p>Initial Investment</p>
                          <p>Net Profit Estimate in 5 Years</p>
                        </div>
                        <div className="third-row">
                          <h2><span>$ 2</span> Milion</h2>
                          <h2><span>$ 225</span> Milion</h2>
                        </div>

                        <div className="third-row first">
                          <p>Estimated Profit in 5 Years</p>
                          <p>Break Event Point</p>
                        </div>
                        <div className="third-row">
                          <h2><span>107</span> X</h2>
                          <h2><span>14</span> Months</h2>
                        </div>
                      </div>
                    }
                    {tab === "3" &&
                      <div className="four">
                        <img src="/impact/mosqfund.png" alt="mosqfund" />
                      </div>  
                    }
                    {tab === "4" && 
                      <div className="five">
                        <img src="/impact/roadmap.png" alt="roadmap" />
                      </div>
                    }
                  </div>
                </div>
              </PageFlip>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='map-section'>
        <div className='blur-circle1'></div>
        <div className='blur-circle2'></div>
        <div className='blur-circle3'></div>
        <Container>
          <Row>
            <Col>
              <h2 className='header-title'>OUR GLOBAL PROJECTS</h2>
              <div className='map-wrapper'>
                <div className='project-center'>
                  <div className='points' onClick={showModal1}>
                    <span></span>
                    <div>01</div>
                  </div>
                  <div className='points' onClick={showModal2}>
                    <span></span>02
                  </div>
                  <div className='points' onClick={showModal3}>
                    03 <span></span>
                  </div>
                  <div className='points'>
                    <span></span>
                    <div>04</div>
                  </div>
                  <div className='points'>
                    05 <span></span>
                  </div>
                  <div className='points'>
                    <div>06</div> <span></span>
                  </div>
                  <div className='points'>
                    07 <span></span>
                  </div>
                  {showContent1 &&
                    <div className='popup'>
                      <div className='popup-inner'>
                        <SvgIcon name='close' viewbox='0 0 10.357 10.357' onClick={hideModal} />
                        <img src={PopupImg1} alt="Popup" />
                      </div>
                    </div>
                  }
                  {showContent2 &&
                    <div className='popup'>
                      <div className='popup-inner'>
                        <SvgIcon name='close' viewbox='0 0 10.357 10.357' onClick={hideModal} />
                        <img src={PopupImg2} alt="Popup" />
                      </div>
                    </div>
                  }
                  {showContent3 &&
                    <div className='popup'>
                      <div className='popup-inner'>
                        <SvgIcon name='close' viewbox='0 0 10.357 10.357' onClick={hideModal} />
                        <img src={PopupImg3} alt="Popup" />
                      </div>
                    </div>
                  }
                </div>
                <img src={MapImg} alt='Map' />
              </div>
            </Col>
          </Row>
        </Container>
        {showContent1 &&
          <div className='bottom-left-details details1'>
            <div className='numbers'>
              <div className='color-bar'></div>
              01.
            </div>
            <div className='right-content'>
              <h4>FlyOut</h4>
              <p>
                Automatic Misting System for reduce the Fly problem (mosquito, fly, etc) in organic way
              </p>
            </div>
          </div>
        }
        {showContent2 &&
          <div className='bottom-left-details details2'>
            <div className='numbers'>
              <div className='color-bar'></div>
              02.
            </div>
            <div className='right-content'>
              <h4>Traccy Solar</h4>
              <p>
                A new way to use Solar energy for enpower Green Endergy and reduce Carbos emission
              </p>
            </div>
          </div>
        }
        {showContent3 &&
          <div className='bottom-left-details details3'>
            <div className='numbers'>
              <div className='color-bar'></div>
              03.
            </div>
            <div className='right-content'>
              <h4>DecentralCity</h4>
              <p>
                Make 100% autonomus a city from Food, Water, Energy and the main resources
              </p>
            </div>
          </div>
        }
        <div className='right-numbers'>
          <ul>
            <li className={showContent1 === true ? 'selected' : ''} onClick={showModal1}>01 <span>FlyOut</span></li>
            <li className={showContent2 === true ? 'selected' : ''} onClick={showModal2}>02 <span>Traccy Solar</span></li>
            <li className={showContent3 === true ? 'selected' : ''} onClick={showModal3}>03 <span>DecentralCity</span></li>
          </ul>
        </div>
      </section>
    </div>
  )
};

export default TraccyConnect