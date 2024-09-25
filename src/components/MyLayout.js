import Header from './Header';
import Footer from './Footer';

export default function MyLayout({children}){
    return(
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />

        </>
    )
}