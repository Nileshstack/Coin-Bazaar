import React, { useState, useEffect } from 'react';
import './News.css';

function News() {
    const [news, setNews] = useState([]);
     const[inc, setInc]=useState(9);
    const load =()=>{
        setInc(inc+9)
      } 
      const unload=()=>{
        setInc(9)
      }



    const fetchnews = async () => {
        const url = 'https://newsapi.org/v2/everything?q=crypto&language=en&apiKey=059a8682ac9244568563cfa91796c986';

        try {
            const response = await fetch(url);
            const data = await response.json(); 
            setNews(data.articles || []); 
        } catch (err) {
            console.error('Failed to fetch news:', err);
        }
    };


    useEffect(() => {
        fetchnews();
    }, []);

    return (
        <div className="row my-5 mx-3">
        <h1>Altcoins & Beyond</h1>
        <h2 id='colorin'>What's <span>Shaping</span> the Market Now?</h2>
        {news.length > 0 ? (
            news.slice(0, inc).map((article, index) => (
                <div key={index} className="card mb-3 col-md-4" style={{ width: "30rem", margin: "20px auto" }}>
                    <div className="row g-0">
                        <div className="col-md-4" id='image'>
                            <img
                                src={article.urlToImage || ""}
                                className="img-fluid rounded-start"
                                alt={"Loading"}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{article.title ? article.title.slice(0, 56)+"..." : " "}</h5>
                                <p className="card-text">{article.description ? article.content.slice(0, 174)+"..." : " "}</p>
                                <a className='link' href={article.url || "#"}><p>[Read More...]</p></a>
                                <p className="card-text">
                                    <small className="text-body-secondary">
                                        Published: {new Date(article.publishedAt).toLocaleString()}  <br />
                                        Source : {article.source.name} 
                                    </small> 
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            ))
        ) : (
              <div className="cen">
                  <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
              </div>
            
        )}

<div className="wrap">
   <div className="more">
      <button onClick={load}> More</button>
    </div>
   <div className={inc>12?'less':'block'}>
    <button onClick={unload}>Wrap</button>
   </div>
   </div>
    </div>
    );
}

export default News;
/*<div key={index}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                    </div>*/