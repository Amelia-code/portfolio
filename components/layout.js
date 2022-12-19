import Header from './header';
import Footer from './foodter';


export default function Layout({ children }) {
 return ( 
    <> 
        <Header/>
        <div>{children}</div> 
        <Footer/>
    </>
 )
}