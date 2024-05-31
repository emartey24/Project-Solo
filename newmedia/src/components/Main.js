import React, { useEffect, useState } from 'react'


// The component receives a prop called search which is used to fetch news articles based on the search term.
const Main = ({ search }) => {

    // news: A state variable that holds the list of news articles.
    // setNews: A function that updates the news state variable.
    // useState([]): Initializes the news state variable with an empty array.
    const [news, setNews] = useState([]);

    // runs the getNews function whenever the search prop changes.
    // Calls the function to fetch news articles based on the search term.
    useEffect(() => {
        getNews(search);
    }, [search]);


    const getNews = async (search) => {

         // Fetch data from the API
         fetch("https://newsapi.org/v2/top-headlines?q=" + search + "&apiKey=4240df7757114945b334f0eb4d499b39")
         .then(response => response.json())
         .then(response => {
           
         // Updates the news state with the list of articles from the API response.
           setNews(response.articles);

    });
}
    const img = "https://c0.wallpaperflare.com/preview/105/94/569/administration-articles-bank-black-and-white.jpg";

// setImage: A function that sets the image source to the default image if there's an error loading the original image.
    const setImage = event => {
        event.target.src = img
    

    }
    return (
        <div className='news'>  
            <div className='row'>
            
                {/* Loops through each news article in the news state and renders a card for each one. */}

                {
                    news.map((item) => (    

                        <div className=" col-lg-4 col-md-6 news-column">
                            <div className='card'>
                                {item.urlToImage !== null
                                    ? <img className='card-img-top' src={item.urlToImage} alt='' onError={setImage} />
                                    : <img className='card-img-top' src={img} alt="" />
                                }
                                {/* Renders the article title as HTML. */}
                                <h6 className='card-header' dangerouslySetInnerHTML={{ __html: item.title }} />
                                <div className='card-body'>

                                    <p style={{ fontSize: 14}} className='news-text'>{item.description}</p>
                                    <button className='btn btn-success'>
                                        <a href={item.url} style={{ textDecoration: "none", color: "black" }}>More</a>
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}


export default Main

