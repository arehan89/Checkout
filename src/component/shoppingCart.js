import React,{useCallback, useEffect} from 'react';
import './checkout.css';

import { Contentful } from '../Contentful';

const ProductClinica = () => {

    const GetProductClinica = useCallback(async () => {
        var response = Contentful()

        await response.getEntry('u6r8QexnCIEirJab5gdCl')
            .then((entry) => formatData(entry.fields))
            .catch(console.error)

         console.log(entry) 
    })

    useEffect(() => {
        GetProductClinica();
    }, [GetProductClinica])

    function formatData(response){
        console.log(response)
        var imagen1 = document.getElementById("iproduct1")
        var producto = document.getElementById("ProductName")
        var price = document.getElementById("price")

        producto.innerHTML = " ";
        price.innerHTML = " ";

        imagen1.src = response.acetaminofen.fields.file.url;
        producto.innerHTML += response.productName;
        price.innerHTML += response.price;
    }

return(
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

                        <label htmlFor="exampleFormControlSelect1">Seleccione su localidad</label>

                        <div className="formContainer">
                            <select className="form-control" id="exampleFormControlSelect1">
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
                        <a href="/checkout" type="submit" className="btn btn-outline-success">Continuar pago</a>

                    </form>

                    <div className='content-right'>

                        <div className="card productos-container ">
                            <div className="card-body">

                                <div className='row productos'>
                                    <div className="card mb-3" >
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img id="iproduct1" src="" className="img-fluid rounded-start" alt="..."></img>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 id="ProductName" className="card-title fw-bold"></h5>
                                                    <p id="price" className="card-text"><small className="text-muted"></small></p>
                                                    <div className="row mx-auto g-3">

                                                        <button className="btn btn-outline-dark btn-sm mb-3" style={{ width: 15 + "%" }}>-</button>
                                                        <p className="card-text ms-1 me-3" style={{ width: 2 + "%" }} ><small className="fw-bold" >1</small></p>
                                                        <button className="btn btn-outline-dark btn-sm mb-3" style={{ width: 15 + "%" }}>+</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card mb-3" >
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="https://copservir.vtexassets.com/arquivos/ids/786215/LUMBAL_F.png?v=637964904862100000" className="img-fluid rounded-start" alt="..."></img>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title fw-bold">Lumbal Forte 48 tabletas</h5>
                                                    <p className="card-text"><small className="text-muted">$22.000 m/cte.</small></p>
                                                    <div className="row mx-auto g-3">

                                                        <button className="btn btn-outline-dark btn-sm mb-3" style={{ width: 15 + "%" }}>-</button>
                                                        <p className="card-text ms-1 me-3" style={{ width: 2 + "%" }} ><small className="fw-bold" >2</small></p>
                                                        <button className="btn btn-outline-dark btn-sm mb-3" style={{ width: 15 + "%" }}>+</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card mb-3" >
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="https://copservir.vtexassets.com/arquivos/ids/786028-800-auto?v=637964083255430000&width=800&height=auto&aspect=true" className="img-fluid rounded-start" alt="..."></img>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title fw-bold">Shampoo Savital Multioleos 500 ml</h5>
                                                    <p className="card-text"><small className="text-muted">$12.750 m/cte.</small></p>
                                                    <div className="row mx-auto g-3">

                                                        <button className="btn btn-outline-dark btn-sm mb-3" style={{ width: 15 + "%" }}>-</button>
                                                        <p className="card-text ms-1 me-3" style={{ width: 2 + "%" }} ><small className="fw-bold" >1</small></p>
                                                        <button className="btn btn-outline-dark btn-sm mb-3" style={{ width: 15 + "%" }}>+</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='row precios mt-2'>
                                    <hr></hr>

                                    <div className="mb-3 mx-auto row">
                                        <p className="card-text"> Envio: <small className="fw-bold" > $2.000 m/cte</small></p>
                                    </div>

                                    <hr></hr>

                                    <div className="mb-3 mx-auto row">
                                        <p className="card-text"> Total: <small className="fw-bold" > $56.750 m/cte</small></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

);

}

export default ProductClinica;