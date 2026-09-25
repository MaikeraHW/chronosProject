import TimerProvider from "./context/TimerContext"
import Home from "./pages/home/Home"
import Layout from "./pages/layout/Layout"

function App() {
  
  return (
    <>
    <TimerProvider>
      <Layout>
        <Home />
      </Layout>
    </TimerProvider>  
    </>
  )
}

export default App
