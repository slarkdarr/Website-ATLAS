import { useParams } from 'react-router-dom';
import { articles } from '../assets/articles';
import thumbnailPhoto from '../assets/images/example-photo-article.jpg'
import '../styles/Article.css';

export default function Article(){
    const { id } = useParams();
    const articleShown = articles.find(el => el.id===id);

    return (
        <div className="article">
            <div className="main-container">
                <div className="header-content">
                    <h1>{articleShown.judul}</h1>
                    <span>Kabar Atlas - {articleShown.tanggal_post}, {articleShown.waktu_post}</span>
                </div>
                <img src={thumbnailPhoto}/>
                <div className="author">

                </div>
                <div className="main-content">

                </div>
                <div className="recent-post">

                </div>
            </div>
        </div>
    )
}