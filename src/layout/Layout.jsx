import Header from "./Header"
import Sidebar from "./Sidebar"
const  Layout =  ({children}) => {

    return (
    <>
        <Header/>
        <Sidebar/>
        <main className="content" >
            {children}
        </main>
    </>
    )

}

export default Layout