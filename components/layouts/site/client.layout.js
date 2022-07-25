import Header from '../common/header';
import Footer from '../common/footer';

export default function Layout({children}) {

    return(
        <div className="container-fluid page-container">
            {children}
        </div>
    )
}