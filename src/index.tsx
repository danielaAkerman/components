import React from "react";
import ReactDOM from "react-dom";

class MyButton extends React.Component<any, any> {
  render() {
    return (
      <button style={{ backgroundColor: "blanchedalmond" }}>
        {this.props.children}
      </button>
    );
  }
}
class Home extends React.Component<any, any> {
  render() {
    const persona = {
      nombre: "Lucy",
      apellido: "Akerman",
      pasatiempos: "modelado",
      amigas: ["Sirena", "Dulci", "Beta"],
    };
    const cuantas =
      persona.amigas.length > 2 ? <MyButton>Muchas</MyButton> : "Algunas";
      const esLinda= true
    return (
      <div>
        Hola {persona.nombre + " " + persona.apellido}.
        {esLinda && "Sos muy linda chica"}. Tus amigas son {cuantas}
        :
        {persona.amigas.map((item) => (
          <MyButton key={item}>{item}</MyButton>
        ))}{" "}
        son muy lindas chicas.
        <MyButton>Aceptar</MyButton>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("hello-example"));
