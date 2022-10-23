
import './App.css';
import { useState } from 'react';
import { ButtonBase, Grid } from '@mui/material';
import { suitekitchen, sk, sk2, sk3, sk4, sk5, sk6, sk7, wtsap } from './assets'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';



function App() {
  // const classes = useStyles();
  // const img = [sk, sk2, sk3, sk4, sk5, sk6, sk7]
  const [selected, setSelected] = useState(sk)

  return (
    <Grid>
      <div className="App">
        <header className="App-header">
          <h2>Suite Kitchen</h2>
          <img src={suitekitchen} className="App-logo" alt="logo" />
          <p>
            تصميم و تركيب المطابخ العصرية لذى سويت كتشن
          </p>
          <a
            className="App-link"
            href="https://wa.link/t0ys0v"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wtsap} alt="logo" />
          </a>
        </header>
      </div>
      <Grid container sx={{ display: "flex", justifyContent: "center", mx: "auto", alignItems: "center", textAlign: "center" }} >
        <Grid item sx={{ width: "70%" }}>
          <ButtonBase >
            <Zoom>
              <img style={{ width: "100%", border: selected ? "2px solid orange" : "none" }}
                alt="complex"
                src={selected}
                onClick={() => setSelected(selected)}
              />
            </Zoom>
          </ButtonBase>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "70%", marginTop: 2 }}>
          <ButtonBase>
            <img style={{ width: "80%", height: "auto", border: selected === sk ? "2px solid orange" : "none" }}
              alt="complex"
              src={sk}
              onClick={() => setSelected(sk)}
            />
          </ButtonBase>
          <ButtonBase>
            <img style={{ width: "80%", height: "auto", border: selected === sk2 ? "2px solid orange" : "none" }}
              alt="complex"
              src={sk2}
              onClick={() => setSelected(sk2)}
            />
          </ButtonBase>
          <ButtonBase>
            <img style={{ width: "80%", height: "auto", border: selected === sk3 ? "2px solid orange" : "none" }}
              alt="complex"
              src={sk3}
              onClick={() => setSelected(sk3)}
            />
          </ButtonBase>
          <ButtonBase>
            <img style={{ width: "80%", height: "auto", border: selected === sk4 ? "2px solid orange" : "none" }}
              alt="complex"
              src={sk4}
              onClick={() => setSelected(sk4)}
            />
          </ButtonBase>
          <ButtonBase>
            <img style={{ width: "80%", height: "auto", border: selected === sk5 ? "2px solid orange" : "none" }}
              alt="complex"
              src={sk5}
              onClick={() => setSelected(sk5)}
            />
          </ButtonBase>
          <ButtonBase>
            <img style={{ width: "80%", height: "auto", border: selected === sk6 ? "2px solid orange" : "none" }}
              alt="complex"
              src={sk6}
              onClick={() => setSelected(sk6)}
            />
          </ButtonBase>
          <ButtonBase>
            <img style={{ width: "80%", height: "auto", border: selected === sk7 ? "2px solid orange" : "none" }}
              alt="complex"
              src={sk7}
              onClick={() => setSelected(sk7)}
            />
          </ButtonBase>

        </Grid>
      </Grid>
      <div className="App">
        <h3>
          للطلب أو الاستفسار تواصلوا معنا عبر الواتساب
        </h3>
        <a
          className="App-link"
          href="https://wa.link/t0ys0v"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wtsap} alt="logo" />
        </a>
      </div>
    </Grid>
  );
}

export default App;
