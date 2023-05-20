import React from "react";
import Slider from 'react-slick'
import AlbumCard from "./AlbumCard";

const CarouselAlbums = ({albums}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <Slider {...settings}>
            {albums.map(album => (
                <div key={album.id}>
                    <div className="album-card-carousel-container">
                        <AlbumCard album={album} /> 
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CarouselAlbums;