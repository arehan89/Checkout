import logo from './logo.svg';
import './App.css';


function App() {

return <>
    <div className='container'>
        <center><h1>Checkout</h1></center>
        <h4>Información de Contacto</h4>
        
        <label for="email">Email</label>
        <nav class="input" className='col-3'>
                <i class="fas fa-envelope" aria-hidden="true"></i>
                <input type="email" name="email" id="email" required="" placeholder="Ingrese su correo" 
                    className='form-control'>
            </input>
            </nav>
        
        <label for="phone">Teléfono</label>
        <nav class="input" className='col-3'>
                <i class="fas fa-envelope" aria-hidden="true"></i>
                <input type="phone" name="phone" id="phone" required="" placeholder="Ingrese su teléfono" 
                    className='form-control'>
            </input>
            </nav>
            
            <br></br>
            <h4>Dirección de Envío</h4>

            <label for="name">Nombre completo</label>
        <nav class="input" className='col-3'>
                <i class="fas fa-envelope" aria-hidden="true"></i>
                <input type="name" name="name" id="name" required="" placeholder="Ingrese su nombre..." 
                    className='form-control'>
            </input>
            </nav>
        
            <label for="adress">Dirección</label>
        <nav class="input" className='col-3'>
                <i class="fas fa-envelope" aria-hidden="true"></i>
                <input type="adress" name="adress" id="adress" required="" placeholder="Dirección de envío" 
                    className='form-control'>
            </input>
            </nav>
            
            <label for="exampleFormControlSelect1">Seleccione su localidad</label><br></br>
            
            <div className="col-3 col-sm-6 col-md-3 form-group">
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
    <div class="form-check">
    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
        <label class="form-check-label" for="defaultCheck1">
         Guardar información
        </label>
    </div>
                
                <br></br>
                <button type="button" class="btn btn-outline-success">Continuar pago</button>   

    </div>

</>

}

export default App;
