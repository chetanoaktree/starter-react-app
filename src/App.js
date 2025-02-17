import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {

  useEffect(()=>{
    const url = "https://api.unicheck.com/similarity/checks/076d1e299b3c45bab8f2ef3879ae996f/report/export/6298048"
    // fetch(url, {
    //     method: "GET",
    //     headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ZGRmMjFlOTE4NDY0NzE2MDg5YyIsImp0aSI6IjMwNDM3NTAiLCJpYXQiOjE2NzY2NDE3MzAsIm5iZiI6MTY3NjY0MTczMCwiZXhwIjoxNjc5MDYwOTMwLCJzdWIiOiI5Mzg3MjUiLCJzY29wZXMiOltdfQ.fdkR4Ek__m20zgH2YsND_rPDXO1BrOeVgU8dNCKI3oNHNj5OLylVodoWoK8cSDDm8l-qMuEwvcczlAXzbIjXkX32tFBnckDbLXIQPo3G2ezyEZL57qz0_LQTj-3ikbSK99RIGNE0Wsuoxo_58AZ5nClEo10n1PksDmr4i43YQSM"}
    // })
    // .then(r => r.text())
    // .then(text => {
    //     console.log('text decoded:', text);
    //     // setRichTextEditor(text)
    // });
    // fetch(url, {
    // headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ZGRmMjFlOTE4NDY0NzE2MDg5YyIsImp0aSI6IjMwNDM3NTAiLCJpYXQiOjE2NzY2NDE3MzAsIm5iZiI6MTY3NjY0MTczMCwiZXhwIjoxNjc5MDYwOTMwLCJzdWIiOiI5Mzg3MjUiLCJzY29wZXMiOltdfQ.fdkR4Ek__m20zgH2YsND_rPDXO1BrOeVgU8dNCKI3oNHNj5OLylVodoWoK8cSDDm8l-qMuEwvcczlAXzbIjXkX32tFBnckDbLXIQPo3G2ezyEZL57qz0_LQTj-3ikbSK99RIGNE0Wsuoxo_58AZ5nClEo10n1PksDmr4i43YQSM"
    // }
    // })


    // axios.get(url, {
    //   headers: {
    //     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ZGRmMjFlOTE4NDY0NzE2MDg5YyIsImp0aSI6IjMwNDM3NTAiLCJpYXQiOjE2NzY2NDE3MzAsIm5iZiI6MTY3NjY0MTczMCwiZXhwIjoxNjc5MDYwOTMwLCJzdWIiOiI5Mzg3MjUiLCJzY29wZXMiOltdfQ.fdkR4Ek__m20zgH2YsND_rPDXO1BrOeVgU8dNCKI3oNHNj5OLylVodoWoK8cSDDm8l-qMuEwvcczlAXzbIjXkX32tFBnckDbLXIQPo3G2ezyEZL57qz0_LQTj-3ikbSK99RIGNE0Wsuoxo_58AZ5nClEo10n1PksDmr4i43YQSM"
    //   }
    // }).then(({data}) => console.log(data));

    const ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1ZGRmMjFlOTE4NDY0NzE2MDg5YyIsImp0aSI6IjMwNDM3NTAiLCJpYXQiOjE2NzY2NDE3MzAsIm5iZiI6MTY3NjY0MTczMCwiZXhwIjoxNjc5MDYwOTMwLCJzdWIiOiI5Mzg3MjUiLCJzY29wZXMiOltdfQ.fdkR4Ek__m20zgH2YsND_rPDXO1BrOeVgU8dNCKI3oNHNj5OLylVodoWoK8cSDDm8l-qMuEwvcczlAXzbIjXkX32tFBnckDbLXIQPo3G2ezyEZL57qz0_LQTj-3ikbSK99RIGNE0Wsuoxo_58AZ5nClEo10n1PksDmr4i43YQSM"
    // axios.get('https://cors-anywhere.herokuapp.com/https://api.unicheck.com/similarity/checks/076d1e299b3c45bab8f2ef3879ae996f/report/export/6298048', {

    //   headers: {
    //     'Authorization': `Bearer ${ACCESS_TOKEN}`,
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(data => console.log("-----------",data))
    //   .catch(error => console.error(error));
    const serv = 'https://api.unicheck.com'

    axios.get(`/api/similarity/checks/076d1e299b3c45bab8f2ef3879ae996f/report/export/6298048`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
