import './index.css'
import Main from "./pages/main"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Certi from "./pages/certificates"
function App() {
  const queryClient = new QueryClient();
  return <>
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/new' element={<Certi/>}/>
          </Routes>
        </BrowserRouter>
      
    </QueryClientProvider>
  </>
    
}

export default App
