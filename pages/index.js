import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import {Carousel} from 'react-bootstrap';
import s from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, FaInstagram, faWhatsapp } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [lebar, setLebar] = useState('');

  useEffect(() => {
    setLebar(window.innerWidth)
  }, [])

  return (
    <>
     <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,900&display=swap" rel="stylesheet" />
    </Head>
      <nav className={s.navigasi}>
        <div className={s.navigasiLeft}>
          <div className={s.logo}>
            <img src="/drag.png" alt="images" classNmae={s.logox} />
            <p>Law Group</p>
          </div>
        </div>
        <div className={s.navigasiRight}>
          <div className={s.childNavigasiRight}>
            <div className={s.contentChild}>
              {
                lebar < 650 ? (
                  <Image src="/history.png" width={24} height={24} alt="image" className={s.imgs} />
                  ):
                  <Image src="/history.png" width={40} height={40} alt="image" className={s.imgs} />
              }
            </div>
            <div className={s.contentChild}>
              <p>WORK HOUR</p>
              <small>09.00 - 20.00 Everyday</small>
            </div>
          </div>
          <div className={s.childNavigasiRight}>
            <div className={s.contentChild}>
            {
                lebar < 650 ? (
                  <Image src="/location-pin.png" width={24} height={24} alt="image" className={s.imgs} />
                  ):
                  <Image src="/location-pin.png" width={40} height={40} alt="image" className={s.imgs} />
              }
            </div>
            <div className={s.contentChild}>
              <p>WORK HOUR</p>
              <small>09.00 - 20.00 Everyday</small>
            </div>
          </div>
        </div>
      </nav>
      <section className={s.navbars}>
        <div className={s.menuMalasngoding}>
          <ul>
              <li><a href="#">Home</a></li>
              <li className={s.dropdown}><a href="#">Practice areas</a>
                <ul className={s.isiDropdown}>
                      <li><a href="#">Employment Law</a></li>
                      <li><a href="#">Intellectual Property Law</a></li>
                      <li><a href="#">Corporate & Business Law</a></li>
                      <li><a href="#">Matrimonial Family Law</a></li>
                      <li><a href="#">Corporate Litigation</a></li>
                      <li><a href="#">Commercial Law</a></li>
                      <li><a href="#">International Commercial Law</a></li>
                </ul>
              </li>
              <li><a href="#">Our attorneys</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div className={s.menuMalasngoding2}>
            <button className={s.btnConsultation}>Go Consultation</button>
          </div>
      </section>
      <Carousel className={s.carousel}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/gedung1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="gedung1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="gedung3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className={s.experience}>
        <h2>Experience That Sets Us Apart</h2>
        <div className={s.wrapMenu}>
          <div className={s.cardMenu}>
            <div className={s.cardMenuLeft}>
              <img src="/card.jpg" alt="Images" />
            </div>
            <div className={s.cardMenuRight}>
              <h3>Family Law</h3>
              <p>Let us discuss your goals with you and determine if Virgin Hickman can help you settle this matter outside of the Courtroom.</p>
              <button className={s.btnLaw}>Learn More</button>
            </div>
          </div>
          <div className={s.cardMenu} id={s.cardMenu1}>
            <div className={s.cardMenuRight} id={s.right1}>
              <h3>Family Law</h3>
              <p>Let us discuss your goals with you and determine if Virgin Hickman can help you settle this matter outside of the Courtroom.</p>
              <button className={s.btnLaw}>Learn More</button>
            </div>
            <div className={s.cardMenuLeft}>
              <img src="/card.jpg" alt="Images" />
            </div>
          </div>
          <div className={s.cardMenu}>
            <div className={s.cardMenuLeft}>
              <img src="/card.jpg" alt="Images" />
            </div>
            <div className={s.cardMenuRight}>
              <h3>Family Law</h3>
              <p>Let us discuss your goals with you and determine if Virgin Hickman can help you settle this matter outside of the Courtroom.</p>
              <button className={s.btnLaw}>Learn More</button>
            </div>
          </div>
          <div className={s.cardMenu} id={s.cardMenu2}>
            <div className={s.cardMenuRight} id={s.right2}>
              <h3>Family Law</h3>
              <p>Let us discuss your goals with you and determine if Virgin Hickman can help you settle this matter outside of the Courtroom.</p>
              <button className={s.btnLaw}>Learn More</button>
            </div>
            <div className={s.cardMenuLeft}>
              <img src="/card.jpg" alt="Images" />
            </div>
          </div>
          <div className={s.cardMenu}>
            <div className={s.cardMenuLeft}>
              <img src="/card.jpg" alt="Images" />
            </div>
            <div className={s.cardMenuRight}>
              <h3>Family Law</h3>
              <p>Let us discuss your goals with you and determine if Virgin Hickman can help you settle this matter outside of the Courtroom.</p>
              <button className={s.btnLaw}>Learn More</button>
            </div>
          </div>
          <div className={s.cardMenu} id={s.cardMenu3}>
            <div className={s.cardMenuRight} id={s.right3}>
              <h3>Family Law</h3>
              <p>Let us discuss your goals with you and determine if Virgin Hickman can help you settle this matter outside of the Courtroom.</p>
              <button className={s.btnLaw}>Learn More</button>
            </div>
            <div className={s.cardMenuLeft}>
              <img src="/card.jpg" alt="Images" />
            </div>
          </div>
          <div className={s.cardMenu}>
            <div className={s.cardMenuLeft}>
              <img src="/card.jpg" alt="Images" />
            </div>
            <div className={s.cardMenuRight}>
              <h3>Family Law</h3>
              <p>Let us discuss your goals with you and determine if Virgin Hickman can help you settle this matter outside of the Courtroom.</p>
              <button className={s.btnLaw}>Learn More</button>
            </div>
          </div>
          <div className={s.cardMenu} id={s.cardMenu4}>
            <div className={s.cardMenuRight} id={s.right4}>
              <h3>Family Law</h3>
              <p>Let us discuss your goals with you and determine if Virgin Hickman can help you settle this matter outside of the Courtroom.</p>
              <button className={s.btnLaw}>Learn More</button>
            </div>
            <div className={s.cardMenuLeft}>
              <img src="/card.jpg" alt="Images" />
            </div>
          </div>
        </div>
      </section>
      <section className={s.highlight}>
        <div className={s.titleHighlight}>
          <h2><span className={s.title}>Hamra Law Group</span> Highlights</h2>
          <p>Hamra Law Group was built on the idea that sophisticated legal services should be convenient, modern and affordable. State-of-the-art practice technology allows us to serve our clients efficiently. We put our clients first and achieve tremendous results. Experience how law can be done better.</p>
        </div>
          <div className={s.wrapHighlight}>
            <div className={s.cardHightlights1}>
              <div className={s.cardHightlightLeft}>
                <img src="/face-detection.png" alt="images" />
              </div>
              <div className={s.cardHightlighRight}>
                <h3>Unmatched Personal Attention</h3>
                <p>We do not believe in legal services. Our boutique size allows us to keep overhead low and provide our clients with a level of service large overstaffed firms simply cant match.</p>
              </div>
            </div>
            <div className={s.cardHightlights}>
              <div className={s.cardHightlightLeft}>
                <img src="/desktop.png" alt="images" />
              </div>
              <div className={s.cardHightlighRight}>
                <h3>Unmatched Personal Attention</h3>
                <p>We do not believe in legal services. Our boutique size allows us to keep overhead low and provide our clients with a level of service large overstaffed firms simply cant match.</p>
              </div>
            </div>
            <div className={s.cardHightlights2}>
              <div className={s.cardHightlightLeft}>
                <img src="/medal.png" alt="images" />
              </div>
              <div className={s.cardHightlighRight}>
                <h3>Unmatched Personal Attention</h3>
                <p>We do not believe in legal services. Our boutique size allows us to keep overhead low and provide our clients with a level of service large overstaffed firms simply cant match.</p>
              </div>
            </div>
            <div className={s.cardHightlights}>
              <div className={s.cardHightlightLeft}>
                <img src="/money.png" alt="images" />
              </div>
              <div className={s.cardHightlighRight}>
                <h3>Unmatched Personal Attention</h3>
                <p>We do not believe in legal services. Our boutique size allows us to keep overhead low and provide our clients with a level of service large overstaffed firms simply cant match.</p>
              </div>
            </div>
          </div>
      </section>
      <section className={s.directur}>
          <div className={s.wrapDirectur}>
            <div className={s.cardDirectur}>
              <div className={s.cardDirecturTop}>
                <img src="/Ahamra.jpg" alt="images" />
              </div>
              <div className={s.cardDicturBottom}>
                <div className={s.platName}>
                  <h3>Abraham Hamra</h3>
                  <p>Managing attorney</p>
                </div>
              </div>
            </div>
            <div className={s.cardDirectur}>
              <div className={s.cardDirecturTop}>
                <img src="/DSC_6441R.jpg" alt="images" />
              </div>
              <div className={s.cardDicturBottom}>
                <div className={s.platName}>
                  <h3>Abraham Hamra</h3>
                  <p>Managing attorney</p>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section className={s.copyRight}>
        <div><small>32 Broadway, Suite 1818, New York, New York 10004 |  info@hamralawgroup.com  | 646-590-0571</small></div>
        <div className={s.copy}><small>© 2020 Hamra Law Group | Designed and Developed by Webterior Designs</small></div>
      </section>
    </>
  )
}