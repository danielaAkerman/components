import React from "react";
import ReactDOM from "react-dom";

class MyButton extends React.Component<any, any> {
  render() {
    return (
      <button style={{backgroundColor:"blanchedalmond"}}>{this.props.children}</button>
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
    return (
      <div>
        Hola {persona.nombre + " " + persona.apellido}. Tus amigas{" "}
        {persona.amigas.map((item)=>( <MyButton>{item}</MyButton>))} son muy lindas chicas.
        <MyButton>Aceptar</MyButton>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("hello-example"));
