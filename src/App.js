import { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './supabaseClient'

function App() {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { data, error } = await supabase
      .from('guru')
      .select()
    if (data) {
      setDatas(data)
    }
    if (error) throw error
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Kabeng RPL.</h1>

        <table border="1" width="50%">
          <thead>
            <tr>
              <th>NIP.</th>
              <th>NAMA</th>

            </tr>
          </thead>
          <tbody>
            {datas.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.nip}</td>
                  <td>{data.nama}</td>

                </tr>
              )
            })}

          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
