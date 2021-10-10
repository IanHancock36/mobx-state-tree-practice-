import React from "react";
import "./style.css";
import { useJokes } from './store';

export default function App() {
  const jokesStore = useJokes()

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
