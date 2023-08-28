
import NavBar from '../navigation';

export default function Header(data) {

    //make sure data is set before trying to render component
    if(Object.keys(data).length > 0) {
        var name = data.personal.name;
        var networks = data.personal.social.map((network, index) => {           
          return <li key={network.name}>
                  <a href={network.url} target="_blank" rel="noopener noreferrer">
                     <i className={network.classname}></i>
                  </a>
              </li>
        })
    }

    return (
        <header id="headerWrapper">
            <NavBar />

            <div className="row banner">
             <div className="banner-text">
                <h1 className="responsive-headline">I&apos;m {name}</h1>
                <hr />
                <div>
                    <span style={{fontSize: "2rem", color: "#fff"}}>
                        Web &amp; Application Developer; Tech Enthusiast
                    </span>
                </div>
                <hr />
                <ul className="social">
                   {networks}
                </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    )
}