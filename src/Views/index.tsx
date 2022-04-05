import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "../Components/ProtectedLayout";

import { AuthProvider } from "../Context/AuthProvider";


export default function App(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/profile" element={
                        <ProtectedLayout>
                            <h2>Olá esse é o component Profile!</h2>
                        </ProtectedLayout>
                    }/>
                        

                    <Route path="/login"/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>

    )


}