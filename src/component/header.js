import "./header.css";
const Header = () => {
    return (<div>
<header>
    <section class="header-content">
  
                <img src="https://www.hidoc.co/assets/img/logo/logo-desktop.png" alt="img" style={{width:"10%"}}/>

        <nav role="navigation">
            <ul class="navigation__list-container" data-visible="true">
                <li class="nav__item">
                    <a class="nav__link" href="#">Drug</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Calculator</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Articles</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">News</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Quizzes</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Serveys</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Webinars</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#">Guidlines</a>
                </li>
            </ul>
        </nav>
        <div>
            <i className="fa fa-navicon"/>
            <button style={{borderRadius:"60%"}}><i class="fa fa-award"></i> 230</button>
        </div>
    </section>
</header>
    </div>)
}

export default Header