import React, { useEffect, useState, useCallback } from "react"
import { Link } from "gatsby"

import { ContentBanner, BoxCenter, WrapperBoxCenter, BoxBottom, Dots, BannerImage } from "./styled"
import { Container, FlexList } from "../../shared/styled-shared"

import icon1 from "../../assets/imgs/icon1.png"
import icon2 from "../../assets/imgs/icon2.png"
import icon3 from "../../assets/imgs/icon3.png"
import { graphql, useStaticQuery } from "gatsby"


export default function Banner() {

  const [image, setImage] = useState('');
  const [listImages, setListImages] = useState([]);
  const data = useStaticQuery(graphql`
      query Banners {
        images:allFile(filter:{
          relativeDirectory:{
            eq:"banners"
          }
        }){
          nodes {
            childImageSharp{
              original{
                src
              },
              fixed(width:600,height:600){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
  
      `)

  const dataImages = () => {
    const images = data.images.nodes.reduce((reduce, item, index) => {
      if (item.childImageSharp) {
        reduce.push({
          id: index,
          src: (window.innerWidth <= 800) ? item.childImageSharp.fixed.src : item.childImageSharp.original.src
        })
      }
      return reduce;
    }, []);
    setListImages(images);
    setImage(images[0])
  }

  useEffect(() => {
    dataImages();
    const event = window.addEventListener('resize', dataImages)
    return () => window.removeEventListener('resize', dataImages);
  }, []);

  const next = useCallback(() => {
    const numberOfImages = listImages.length;
    if (!numberOfImages) return;
    const indexOf = listImages.indexOf(image);
    const nextImage = indexOf + 1;
    if (listImages[nextImage] !== undefined)
      return setImage(listImages[nextImage])

    return setImage(listImages[0])
  }, [listImages, image])

  const prev = useCallback(() => {
    const numberOfImages = listImages.length;
    if (!numberOfImages) return;
    const indexOf = listImages.indexOf(image);
    const nextImage = indexOf - 1;
    if (listImages[nextImage] !== undefined) {
      return setImage(listImages[nextImage])
    } else {
      return setImage(listImages[numberOfImages - 1])
    }
  }, [listImages, image])

  useEffect(() => {
    const slideOn = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(slideOn);
  }, [])

  return (
    <ContentBannerImage images={listImages} active={image}>
      <Container>
        <WrapperBoxCenter>
          <BoxCenter>
            <div className="intro">
              <h1>
                <span className="txt-1 f-r">Reserva do</span>
                <span className="txt-2 f-r">Tabuleiro</span>
                <span className="txt-3 f-s">Santa Catarina</span>
              </h1>
            </div>
            <div className="info">
              <div className="item">
                <img src={icon3} alt="" />
                <p>1 Vaga</p>
              </div>
              <div className="item">
                <img src={icon2} alt="" />
                <p>2 Dorm</p>
              </div>
              <div className="item">
                <img src={icon1} alt="" />
                <p>74 m²</p>
              </div>
            </div>
            <div className="call-action">
              <Link className="link" to="/developments">
                Conheça o Empreendimento
              </Link>
              <svg
                className="icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                  fill="white"
                />
              </svg>
            </div>
          </BoxCenter>
          <BoxBottom>
            <div></div>
            <div className="chat-btn" onClick={() => document.location.href = 'mailto:CONTATO@ORTCONSINCORPORADORA.COM.BR'}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM16 12H4V10H16V12ZM16 9H4V7H16V9ZM16 6H4V4H16V6Z"
                  fill="white"
                />
              </svg>
            </div>
          </BoxBottom>
        </WrapperBoxCenter>
        <Dots>
          <FlexList flow="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <li onClick={() => prev()}>
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.74347 1.41L3.16347 6L7.74347 10.59L6.33347 12L0.333469 6L6.33347 4.4819e-08L7.74347 1.41Z" fill="white" />
              </svg>
            </li>
            {
              listImages.map((dot, index) => (
                <li key={index} className={(image.id === dot.id) ? 'active' : ''} onClick={() => setImage(listImages[index])}>
                  <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.03845" cy="2.29492" r="2" transform="rotate(-90 2.03845 2.29492)" fill="white" />
                  </svg>
                </li>
              ))
            }
            <li onClick={() => next()}>
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.333496 10.59L4.9135 6L0.333496 1.41L1.7435 0L7.7435 6L1.7435 12L0.333496 10.59Z" fill="white" />
              </svg>
            </li>
          </FlexList>
        </Dots>
      </Container>
    </ContentBannerImage>
  )
}

function ContentBannerImage({ children, images, active }) {
  return (<ContentBanner>
    {
      images.map(item => <BannerImage className={(active.id === item.id) ? 'active' : 'inactive'} key={item.id} src={item.src} alt="banner" />)
    }
    <div>
      {children}
    </div>
  </ContentBanner>)
}
