import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "./Components/ProtectedLayout";

import { AuthProvider } from "./Context/AuthProvider";

import LoginPage from './Views/Login';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/profile" element={
            <ProtectedLayout>
              <h2>Olá esse é o component Profile!</h2>
            </ProtectedLayout>
          }/>
                        

          <Route path="/login" element={ <LoginPage/> }/>
        </Routes>
    </BrowserRouter>
  </AuthProvider>
); 