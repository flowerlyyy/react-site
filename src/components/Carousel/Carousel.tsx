import { useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './Carousel.scss';
import leaf from './Vector 9.png';
import hoodies from './Rectangle 20.png';
import coats from './Rectangle 21.png';
import tees from './Rectangle 22.png';
import arrow from './Arrow 1.svg';


export const Carousel=()=>{
    const productCardWidth = 562;
    const [currentSlideNumber] = useState(0);
    
    
    const products=[
        {
            id:1,
            imageSrc: hoodies,
            title: 'Hoodies & Sweetshirt',
            titleLink: '#',
            description: 'Explore Now!',
             descriptionLink: '#',
            arrow:arrow 
        },{
            id:2,
            imageSrc: coats,
            title: 'Coats & Parkas',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:arrow 
        },{
            id:3,
            imageSrc: tees,
            title: 'Tees & T-Shirt',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:arrow 
        },{
            id:4,
            imageSrc: hoodies,
            title: 'Hoodies & Sweetshirt',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:arrow 
        },{
            id:5,
            imageSrc: hoodies,
            title: 'Coats & Parkas',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:arrow 
        },{
            id:6,
            imageSrc: hoodies,
            title: 'Tees & T-Shirt',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:arrow
        },{
            id:7,
            imageSrc: coats,
            title: 'Hoodies & Sweetshirt',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:arrow 
        },{
            id:8,
            imageSrc: coats,
            title: 'Coats & Parkas',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:arrow 
        },{
            id:9,
            imageSrc: coats,
            title: 'Tees & T-Shirt',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:arrow 
        },
        ];
    return (
      
        <div className="new container">
        <div className="pimg">
        <h1>NEW ARRIVALS</h1>
        <img className="leaf" src={leaf} alt="leaf" />
      </div>

<div className="three-pictures">
    {
        products.map((product,index)=> <ProductCard 
        id={product.id} 
        imageSrc={product.imageSrc} 
        title={product.title} 
        titleLink={product.titleLink} 
        description={product.description} 
        descriptionLink={product.descriptionLink} 
        arrow={product.arrow}
        marginLeft={
            index === 0 ? `${-productCardWidth * currentSlideNumber}px` : ""
          }
        />)
    }
</div>
    </div>
    
    );
}

