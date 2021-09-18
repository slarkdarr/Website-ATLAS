import { useParams } from 'react-router-dom';
import { articles } from '../assets/articles';
import thumbnailPhoto from '../assets/images/article-images/example-photo-article.jpg'
import '../styles/Article.css';

const Paragraphs = (props) => {
    let retval = [];
    for (let i=0; i<props.article.length; i++){
        retval.push(
            <div>
                <p>
                    {props.article[i]}
                </p>
                <br></br>
            </div>
        )
    }
    return retval;
}

const RecentPosts = (props) => {
    let retval = [];
    for (let i=0; i<props.next.length; i++){
       if (props.next[i]!==null){
            const nextArticle = articles.find(el => el.id===props.next[i])
            retval.push(
                <div className="next-post-wrapper">
                    <img src="https://via.placeholder.com/120" alt=""/>
                    <div className="text">
                        <h4>{nextArticle.judul}</h4>
                        <p>{nextArticle.isi[0].split('.')[0]}</p>
                    </div>
                </div>
            )
       }
    }
    return (
        <div>
            {retval}
        </div>
    );
}

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
                <img src={thumbnailPhoto} alt="article"/>
                <div className="author">
                    <span>Penulis: <b>{articleShown.penulis}</b> </span>
                </div>
                <div className="main-content">
                    <Paragraphs article={articleShown.isi}/>
                </div>
                <div className="recent-post">
                    <div className="baca-juga">
                        <span>Baca Juga</span>
                    </div>
                    <div className="list-recent-posts">
                        <RecentPosts next={articleShown.next}/>
                    </div>
                </div>
            </div>
        </div>
    )
}