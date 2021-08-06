import doctorImage from "./images/medica-1.jpg";
import "./styles/style.css";

function App (){

  function containerStyle() {
    return ({
      width: 1000,
      margin: "auto",
      padding: 20,
      textAlign: "center",
      backgroundColor: "#EEE",
      border: "solid 1px black",
      borderRadius: 5
    });
  }  
  
  const medicos = {
    medico1: "Maria Paula de Souza",
    medico2: "Pedro dos Santos",
    medico3: "Joana Aparecida"
  }

  return (
    <div id="appContainer" style={containerStyle()}>
      <h1>Profissionais da saúde</h1>  
      <div className="listCards" style={{display: "flex", justifyContent: "space-around", padding: "20px 40px", marginTop: 20, border: "solid 1px lightGray", borderRadius: 5}}>
        <div className="card">
          <img src={doctorImage} alt="Médica" />
          <p>{medicos.medico1}</p> 
        </div>
        
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/medico.jpg'} alt="Médico" />
          <p>{medicos.medico2}</p> 
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Médica utilizando mascara" />
          <p>{medicos.medico3}</p> 
        </div>
      </div>
    </div> 
  );
}

export default App;