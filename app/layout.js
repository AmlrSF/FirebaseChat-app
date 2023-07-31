import Nav from "@/components/Nav"
import '../styles/globals.css'
import { AuthContextProvider } from "@/context/authContext"
export const metadata = {
    title : 'ChatME',
    description : 'Chatting with friends'
}

const rootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <AuthContextProvider>
                <div className='main'>
                    <div className='gradient' />              
                </div>
                <main>
                    <Nav />
                    {children}
                </main>
            </AuthContextProvider>
        </body>
    </html>
  )
}

export default rootLayout
