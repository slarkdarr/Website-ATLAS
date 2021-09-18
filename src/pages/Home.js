import { Link } from "react-router-dom";
import thumbnailPicture from "../assets/images/article-images/example-photo-article.jpg"
import "../styles/Home.css"
import Footer from "../components/footer"

export default function Home() {
    // const onClick = window.location.href
    return (
        <div className="home">
            <div className="main-container">
                <div className="welcome-box">
                    <img src={thumbnailPicture} alt="Thumbnail"/>
                    <h1>Atletik Ganesha</h1>
                    <h2>Tulis Apa Ya</h2>
                    <div className="btn">Get to Know Us!</div>
                </div>

                <div className="menu">
                    <nav className="nav-menu">
                        <Link className="link nav-shop" to="/shop">
                            Shop
                        </Link>

                        <Link className="link nav-news" to="/news">
                            News
                        </Link>

                        <Link className="link nav-events" to="/events">
                            Events
                        </Link>
                    </nav>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
