import logo from './logo.svg';
import './App.css';
import React from "react"
import {AuthCluster} from "./auth-cluster"
import {InitCluster} from "./init-cluster"
import {useCurrentUser} from "./hooks/current-user"
import {ProfileCluster} from "./profile-cluster"

function App() {
  const cu = useCurrentUser()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Flow Memes
        </p>
        <AuthCluster />
        <InitCluster address={cu.addr} />
        <ProfileCluster address={cu.addr} />
      </header>
    </div>
  );
}

export default App;
