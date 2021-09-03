import Header from '../components/header';
import Footer from "../components/footer";
import Article from './Article';
import { articles } from '../assets/articles';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function News() {
    const listOfArticle = () =>{
        let fieldArticle = [];
        for (let i=0;i<articles.length;i++){
            let id = articles[i].id;
            fieldArticle.push(
                <Link to={`/news/${id}`}>{`Artikel ${id}`}</Link>
            )
        }  
        return fieldArticle
    }

    return (
        <Router>
            <Header/>

            <Switch>
                <Route path="/news/:id">
                    <Article/>
                </Route>
                <Route path="/news">
                    <h2>News</h2>
                    {listOfArticle()}
                </Route>
            </Switch>
            <Footer/>
        </Router>
    );
}
  