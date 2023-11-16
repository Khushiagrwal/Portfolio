import React from 'react';
import IMG from "../Assets/IMG.png";
import "./Portfolio.css";

const data=[
  {
    id:1,
    image:IMG,
    title:"Web Project",
    demo:"https://khushiagrwal.github.io/web_project/"
  },
  {
    id:2,
    image:IMG,
    title:"HTML",
    demo:" https://khushiagrwal.github.io/test4/"
  },
  {
    id:3,
    image:IMG,
    title:"kuch nhi",
    demo:"https://khushiagrwal.github.io/web_project/"
  }
]
export const Portfolio = (props) => {
    return (
        <section id="Portfolio">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
          <div className="container portfolio_container">
          {
            data.map(({id,image,title,demo})=>{
              return (
                <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="" className='image' />
              </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo </a>
                </div>
            </article>
              );
            })
          }
          </div>
        </section>
    );
};

