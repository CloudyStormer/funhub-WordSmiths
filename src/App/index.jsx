import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frame from "../pages/Frame";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename="/funhub/wordSmiths">
      <Routes>
        <Route path="/" element={<Frame />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
