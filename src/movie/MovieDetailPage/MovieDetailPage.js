import React from 'react';
import './MovieDetailPage.css';
import { useLocation } from 'react-router-dom';

export default function MovieDetailPage() {
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    
    let query = useQuery();
    const searchValue = query.get('k');
    console.log(searchValue);

    return (
        <div className='movieDetailBackground'>
            <iframe 
                className='iframeMovie'
                title='iframeMovieDetail'
                allow='autoplay; fullscreen'
                src={`https://www.youtube.com/embed/${searchValue}?controls=0&autoplay=1&loop=1&mute=1&playlist=${searchValue}`}>
            </iframe>
        </div>
    )
}
