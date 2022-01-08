import React, {useState} from 'react';
import './App.css';
import './css/custom.css';

const Form=()=> {

  const [datos, setDatos] = useState({
    description: '',
   list: []
  })
  
  const handleInputChange=(event)=>{
    let value = event.target.value.split("#");
    value= value.slice(1, value.length);
    setDatos({ 
      ...datos,
      /**
      Event es un objeto que tiene distintos atributos. Entre esos 
      atributos tiene relacionado un target (el tipo de elemento HTML),
      un nombre, un valor, entre otros. 
      Lo que hacemos en esta linea es asociar el nombre del elemento
      al nombre del state y asignarle el valor.
       */
      [event.target.name] : event.target.value,
      list : value
    })

    console.log(datos.list);
  }


  const sendData =(event)=>{ 
    /* Aqui se pueden enviar los datos a la base de datos **/
     event.preventDefault();
  }
    /** Cada input debe tener una propiedad name relacionada 
    al nombre del hook */
    return (
        <div id="asd">
          <div id="Form">
             Hashtags:
            <form onSubmit ={sendData}> 
            <textarea className="form-control mt-2" id="hashText"
              placeholder='Write the description here'
              name="description"
              onChange={handleInputChange} 
              />
              <button className="btn btn-primary mt-3" onClick={sendData}>click</button>
            </form>
          </div>
          <div id="list"> 
                  List of HashTags:
                  <ol>
                  {datos.list.map(list => <li>{list}</li>)}
                  </ol>
          </div>
        </div>
      );
  }

  export default Form;
