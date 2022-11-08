import React, { useEffect } from 'react'
import { Route, Routes} from "react-router-dom"
import { AnimatePresence } from 'framer-motion';
import { CreateContainer, Header, MainContainer, MenuContainer, Privacy, Terms  } from './components';
import { useStateValue } from './context/StateProvide';
import { getAllComputerItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';


const App = () => {
  const [{}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllComputerItems().then((data) => {
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
            <Route path="/Menu" element={<MenuContainer />} />
            <Route path="/Privacy" element={<Privacy /> } />
            <Route path="/Terms" element={<Terms /> } />
        </Routes>
    </main>
  </div>
  </AnimatePresence>
  );
};

export default App;