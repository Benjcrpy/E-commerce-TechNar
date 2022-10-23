import React, { useEffect } from 'react'
import { Route, Routes} from "react-router-dom"
import { AnimatePresence } from 'framer-motion';
import { CreateContainer, Header, MainContainer } from './components';
import { useStateValue } from './context/StateProvide';
import { getAllComputerItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';


const App = () => {
  const [{ computerItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllComputerItems().then(data => {
      dispatch({
        type: actionType.SET_COMPUTER_ITEMS,
        computerItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);



return (
<AnimatePresence exitBeforeEnter>
  <div className="w-screen h-auto flex flex-col bg-slate-900">
    <Header />

    <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full"> 
        <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
    </main>
  </div>
  </AnimatePresence>
  );
};

export default App;