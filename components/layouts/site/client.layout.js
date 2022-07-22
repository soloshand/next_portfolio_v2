import Header from '../common/header';

export default function Layout({children}) {

    return(
        <div className="container-fluid page-container">
           <div className="row">
                <Header />
                <div class="container-fluid content-section">
                    {children}
                </div>
           </div>
        </div>
    )
}