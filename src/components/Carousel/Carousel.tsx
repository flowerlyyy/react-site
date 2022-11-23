import './Carousel.scss';
import leaf from './Vector 9.png';
export const Carousel=()=>{
    
    const products=[
        {
            id:1,
            imageSrc: './Assets/Rectangle 20.png',
            title: 'Hoodies & Sweetshirt',
            titleLink: '#',
            description: 'Explore Now!',
            arrow:'./Assets/Arrow 1.svg'
        },{
            id:2,
            imageSrc: './Assets/Rectangle 21.png',
            title: 'Coats & Parkas',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:'./Assets/Arrow 1.svg'
        },{
            id:3,
            imageSrc: './Assets/Rectangle 22.png',
            title: 'Tees & T-Shirt',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:'./Assets/Arrow 1.svg'
        },{
            id:4,
            imageSrc: './Assets/Rectangle 20.png',
            title: 'Hoodies & Sweetshirt',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:'./Assets/Arrow 1.svg'
        },{
            id:5,
            imageSrc: './Assets/Rectangle 20.png',
            title: 'Coats & Parkas',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:'./Assets/Arrow 1.svg'
        },{
            id:6,
            imageSrc: './Assets/Rectangle 20.png',
            title: 'Tees & T-Shirt',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:'./Assets/Arrow 1.svg'
        },{
            id:7,
            imageSrc: './Assets/Rectangle 21.png',
            title: 'Hoodies & Sweetshirt',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:'./Assets/Arrow 1.svg'
        },{
            id:8,
            imageSrc: './Assets/Rectangle 21.png',
            title: 'Coats & Parkas',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:'./Assets/Arrow 1.svg'
        },{
            id:9,
            imageSrc: './Assets/Rectangle 21.png',
            title: 'Tees & T-Shirt',
            titleLink: '#',
            description: 'Explore Now!',
            descriptionLink: '#',
            arrow:'./Assets/Arrow 1.svg'
        },
        ];
    return (
        <div className="carousel">
<div className="pimg">
          <h1>NEW ARRIVALS</h1>
          <img className="leaf" src={leaf} alt="leaf" />
        </div>
 <div className="three-pictures"></div>
        </div>
    )
}