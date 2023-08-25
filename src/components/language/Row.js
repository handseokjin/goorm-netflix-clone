import React, { useEffect, useState } from 'react';
import axios from './api/axios';

export default function Row({ title, id, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
 
  useEffect(() => {
    if (fetchUrl) {
      fetchMovieData();
    }
  }, [fetchUrl]);

  const fetchMovieData = async () => { 
    console.log('fetchUrl 값:', fetchUrl);
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
        return request;
  };

  const handleMouseOver = (movie) => {
    setSelectedMovie(movie);
  };



  const handleMouseOut = () => {
    setSelectedMovie(null);
  };


  return (
    <section className='row'>
      <div id={id} className="row__posters">
        {movies.map((movie) => (
          <div 
          className={`row__ ${selectedMovie ? 'selected' : ''}`} 
          key={movie.id}
          onMouseOver={() => handleMouseOver(movie)} 
            onMouseOut={handleMouseOut} >
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path} `}
              alt={movie.name}
              onError={(e) => {
                e.target.src = "https://gimpomaru.gimpo.go.kr/imgdata/gimpomaru/202303/2023032408531165.jpg";
              }}
            />
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className='preview-modal'>
        <img  
        src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}
        alt={selectedMovie.name}/>
        <div className='preview-details'>
         <div className='preview-img'>   
        <div className='preview-icons'>
        <div className='preview-line'>
               <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"aria-hidden="true">
                <path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill='black' />
               </svg>
               </div>

            <div className='preview-plusline'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"aria-hidden="true">
                <path d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fillRule='evenodd' clipRule='evneodd'fill='white'/>
            </svg>
            </div>
            <div className='preview-likeline'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"aria-hidden="true">
                <path d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fillRule='evenodd' clipRule='evneodd'fill='white'/>
            </svg>
            </div>
            </div>
            <div >
            <div className='preview-right-detail'>
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"aria-hidden="true">
                <path d="M12 15.5859L19.2928 8.29297L20.7071 9.70718L12.7071 17.7072C12.5195 17.8947 12.2652 18.0001 12 18.0001C11.7347 18.0001 11.4804 17.8947 11.2928 17.7072L3.29285 9.70718L4.70706 8.29297L12 15.5859Z" fillRule='evenodd' clipRule='evneodd'fill='white' />
            </svg>
            </div>
                
            </div>
        
        </div>
        <div className='preview-text'>
        
        <h2>{selectedMovie.title || selectedMovie.name}</h2>
        <h3>{selectedMovie.release_date}</h3>
        <p>{selectedMovie.overview}</p>
        </div>
        </div>
        </div>)}
    </section>
  );
}
