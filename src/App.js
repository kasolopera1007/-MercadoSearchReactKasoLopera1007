import React, { Component } from 'react';
import ObtenerProducto from './buscar';

class App extends Component {
	render() {
		return (
			<div>
				<h1>El ComprasLibre de KasoLopera1007</h1>
				<p>Que desea Buscar</p>
				<ObtenerProducto/>
			</div>
		);
	}
}
export default App;
