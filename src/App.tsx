import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [address, setAddress] = useState();
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchAddress();
  }

  const fetchAddress = async () => {
    const url = `http://api.zippopotam.us/${country}/${postCode}`
    const response = await fetch(url);
    const address = await response.json();
    setAddress(address);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
        </label>
        <br />
        <label>
          Post Code:
          <input
            type="text"
            value={postCode}
            onChange={(event) => setPostCode(event.target.value)}
          />
        </label>
        <div><button type='submit'>Submit</button></div>
      </form>
      <br/>
      <div>
        <p>{JSON.stringify(address)}</p>
      </div>
    </div>
  );
}

export default App;
