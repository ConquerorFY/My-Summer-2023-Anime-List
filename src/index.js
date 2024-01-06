import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import AudioPlayer from './components/AudioPlayer';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
// in case autoplay does not work 
const bodyRef = document.querySelector('body');
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AudioPlayer bodyRef={bodyRef} />
      <App bodyRef={bodyRef} />
      {/* <AudioPlayer />
      <App /> */}
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
