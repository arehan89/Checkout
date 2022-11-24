import React,{useCallback, useEffect} from 'react';
import './checkout.css';
import { Contentful } from '../Contentful';

const CheckOut = () => {

  const GetCheckOut = useCallback(async () => {
    var response = Contentful()

    await response.getEntry('u6r8QexnCIEirJab5gdCl')
        .then((entry) => formatData(entry.fields))
        .catch(console.error)

     console.log(entry) 
})

useEffect(() => {
  GetCheckOut();
}, [GetCheckOut])

function formatData(response){
    console.log(response)
    var imagen = document.getElementById("tarjetas")

    imagen.src = response.tarjetas.fields.file.url;
}

return(
    <div className="container">
  <form action="#">
    <div className="row">
      <div className="col">
        <center><h3 className="title">Dirección de Envío</h3></center>
        <div className="inputBox">
          <span>Contacto :</span>
          <input type="email" min={1} max={20} required placeholder="Ingrese correo de contacto" />
        </div>
        <div className="inputBox">
          <span>Enviar a :</span>
          <input type="text" maxLength={15} required placeholder="Dirección de domicilio" />
        </div>
        <div className="flex">
          <div className="inputBox">  
            <span>Código Postal :</span>
            <input type="text" id="text" name="text" minLength={6} maxLength={6} required placeholder={111011} />
          </div>
          <div className="inputBox">
            <span>Ciudad :</span>
            <input type="text" maxLength={15} required placeholder="Bogotá" />
          </div>
        </div>
      </div>
      <div className="col">
        <center><h3 className="title">Pago</h3></center>
        <div className="inputBox">
          <span>Tarjetas Aceptadas :</span>
          <img id="tarjetas" src="" alt />
        </div>
        <div className="inputBox">
          <span>Nombre de la tarjeta :</span>
          <input type="text" maxLength={15} required placeholder="Alejandro M. Vega" />
        </div>
        <div className="inputBox">
          <span>Número de la tarjeta :</span>
          <input type="number" required=" " pattern="[0-9]" placeholder="1111-2222-3333-4444" />
        </div>
        <div className="inputBox">
          <span>Mes :</span>
          <input type="text" pattern="[a-zA-Z]" maxLength={12} required placeholder="Noviembre" />
        </div> 
        <div className="flex">
          <div className="inputBox">
            <span>Año :</span>
            <input type="number" pattern="[0-5]" required placeholder={2025} />
          </div>
          <div className="inputBox">
            <span>CVV :</span>
            <input type="text" minLength={3} maxLength={3} required placeholder={123} />
          </div>
        </div>
      </div>
    </div>
    <input type="submit" defaultValue="Pagar" className="submit-btn" />
  </form>
</div>

);

}

export default CheckOut;