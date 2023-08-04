//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';

import TranscriptionPage from './components/ASR_Play';
import TranscriptionMain from './components/ASR_Main';
import TranscriptionContainer from './components/ASR_UI';

//new update

function App() {
  return (
    <>    
      <Routes>
        <Route path="/" element={<TranscriptionMain/>}/>   
        <Route path="/ui" element={<TranscriptionContainer></TranscriptionContainer>}/>   
        <Route path="/play" element={<TranscriptionPage/>}/>  
      </Routes>     
    </>  
  );
}

export default App;
