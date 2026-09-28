import { TaskContextProvider } from "./contexts/TaskContext/TaskContext"
import Home from "./pages/home/Home"
import Layout from "./pages/layout/Layout"

function App() {
  
  return (

    <TaskContextProvider>
      <Layout>
        <Home />
      </Layout>
    </TaskContextProvider>
  )
}

export default App
