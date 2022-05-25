import Bgvideo from './bg';
import Header from './header';
import Page1 from './page1';
import Carasol from './carasol';
import Page2 from './page2';
import Footer from './footer';
import About from './about';
import Cards2 from './cards2';

function Page1layout() {
    return ( 
        <div>
        <Bgvideo/>
        <Page2/>
        <Page1/>
        <About/>
        <Cards2/>
        <Footer/> 
        </div>
     );
}

export default Page1layout;