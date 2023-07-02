import { ChakraProvider, DarkMode, extendTheme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { OhmsLaw } from './components/pages/OhmsLaw';
import { Tracker } from './components/pages/Tracker';

export function App() {
  return (
    <ChakraProvider
      theme={extendTheme({
        config: {
          initialColorMode: 'dark',
          useSystemColorMode: false,
        },
        fonts: {
          heading: 'Comic Neue',
          body: 'Comic Neue',
        },
      })}
    >
      <DarkMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tracker' element={<Tracker />} />
            <Route path='ohms-law' element={<OhmsLaw />} />
          </Routes>
        </BrowserRouter>
      </DarkMode>
    </ChakraProvider>
  );
}
