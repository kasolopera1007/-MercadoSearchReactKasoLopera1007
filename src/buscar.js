import React, { Component } from 'react';
import axios from 'axios';

class ObtenerProducto extends Component {

	constructor() {
		super();
		this.state = {
			result: []
		};
	}

	obtenerProducto(dato) {
		this.setState({
			input: dato.target.value
		});
	}

	consultar(dato) {
		dato.preventDefault();

		axios.get("https://api.mercadolibre.com/sites/MCO/search?q=" + dato.target.querySelector('input').value)
			.then(res => {
				this.setState({result: res.data.results});
			})
	}

	render() {
		return (
			<div>
				<form onSubmit = {this.consultar.bind(this)}>
					<input type = "text"
						value = {this.state.consultar}
						onChange = {this.obtenerProducto.bind(this)}
					/>
					<input type="submit" value="Encuentralo"/>
				</form>

				{this.state.result && this.state.result.map((result, key) =>
					<div id = {result.id}>
						<img src = {result.thumbnail} />
						<div>Articulo: {result.title} </div>
						<div>Valor Rebajado: ${result.price}</div>
						<div>Productos Vendidos: {result.sold_quantity} </div>
					</div>
				)}
			</div>
		);
	}
}

export default ObtenerProducto;
