import './ProductCard.scss';

interface IProductCardProps{
    id:number;
    imageSrc: string;
    title: string;
    titleLink: string;
    description: string;
    descriptionLink: string;
    arrow:string;
    
}
export const ProductCard=(props:IProductCardProps)=>{
    const {imageSrc,arrow,description,descriptionLink,title,titleLink}=props;
    return (
<div className="column">
                    <img className="afterChange" src={imageSrc} alt="" />
                   <div className="textArrow">
                      <div className="text">
                     <a href={titleLink} className="name">{title} </a>
                     <a href={descriptionLink} className="explore">{description}</a>
                    </div>
                       <img className="arrow" src={arrow} alt=""/>
                </div>
                 </div>
    );
}