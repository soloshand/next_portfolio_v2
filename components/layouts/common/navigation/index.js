import Link from 'next/link';
import { navLinks } from "../../../../data/navigation"
import { useRouter } from "next/router"

export default function NavBar() {

    const router = useRouter();
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">
                        Stephen Fields
                    </a>
                </div>
                <ul className="nav navbar-nav">
                    { navLinks.map((navitem, index) => {
                        return(
                            <li key={index}>
                            <Link href={navitem.path}>
                                <a>{navitem.name}</a>
                            </Link>
                            </li>
                        );
                    }) 
                        
                    }
                </ul>
        </nav>
     );
}