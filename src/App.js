import logo from './logo.svg';
/* import Navbar from './component/Navbar'; */
import './App.css';


function App() {

return <>
<div className='container d-flex'>
    <form className='form-left'>
        <center><h1>Checkout</h1></center>
        <h4>Información de Contacto</h4>
        
        <label htmlFor="email">Email</label>
        <div className="input">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <input type="email" name="email" id="email" required placeholder="Ingrese su correo" 
                    className='form-control'>
            </input>
        </div>
        
        <label htmlFor="phone">Teléfono</label>
        <div className="input">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <input type="phone" name="phone" id="phone" required placeholder="Ingrese su teléfono" 
                    className='form-control'>
            </input>
            </div>
            
            <br></br>
            <h4>Dirección de Envío</h4>

            <label htmlFor="name">Nombre completo</label>
        <div className="input">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <input type="name" name="name" id="name" required placeholder="Ingrese su nombre..." 
                    className='form-control'>
            </input>
            </div>
        
            <label htmlFor="adress">Dirección</label>
        <div className="input">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <input type="adress" name="adress" id="adress" required placeholder="Dirección de envío" 
                    className='form-control'>
            </input>
            </div>
            
            <label htmlFor="exampleFormControlSelect1">Seleccione su localidad</label><br></br>
            
            <div className="formContainer">
    <select className="form-control"  id="exampleFormControlSelect1">
    <option>Seleccione</option>  
      <option>Antonio Nariño</option>
      <option>Barrio Unidos</option>
      <option>Bosa</option>
      <option>Chapinero</option>
      <option>Ciudad Bolivar</option>
      <option>Engativá</option>
      <option>Fontibón</option>
      <option>Kennedy</option>
      <option>La Cadelaria</option>
      <option>Los Mártires</option>
      <option>Puente Aranda</option>
      <option>Rafael Uribe</option>
      <option>San Cristobal</option>
      <option>Santa Fe</option>
      <option>Suba</option>
      <option>Teusaquillo</option>
      <option>Tunjuelito</option>
      <option>Usaquen</option>
      <option>Usme</option>
    </select>
    </div>

    <br></br>
    <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
        <label className="form-check-label" htmlFor="defaultCheck1">
         Guardar información
        </label>
    </div>
                
                <br></br>
                <button type="submit" className="btn btn-outline-success">Continuar pago</button>   

    </form>
    <div className='content-right'>
        <article className='productContainer'>
            <span className="titleDescription">Acetaminofen</span>
            <span className="value">$20.200</span>
            <img alt="service"></img>
            <div>
                <input type="number" placeholder="1.0" step="1" min="0"/>
            </div>
        </article>
        <article className='productContainer'>
            <span className="titleDescription">Acetaminofen</span>
            <span className="value">$50.000</span>
            <img alt="service" src="https://www.farmalisto.com.co/95304/acetaminofen-500-mg-american-generics-caja-con-100-tabletas.jpg"></img>
            <div>
                <input type="number" placeholder="1.0" step="1" min="0"/>
            </div>
        </article>
    </div>
    {/* divbar></Navbar> */}
</div>

</>

}

export default App;
