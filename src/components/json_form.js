import React from 'react'
import data from './json_vehicledata'

export default function json_form(){
	function onSubmit(e){
		e.preventDefault();
		data.topics.map(data1 => {
			data1.properties.map(i => {
				var ids = document.getElementById(i.label).value;
				console.log(ids);
			})
		})
	}
	return (
		<div className="container">
		<form className="form-outer" onSubmit = {onSubmit}>
			{data.topics.map(vdata => {
				//console.log(vdata)
				return(
					<div>
				<h3>{vdata.title}</h3>
				<h5>{vdata.description}</h5>
				{
					vdata.properties.map(input => {
						//console.log(input)
						return(
							<div className="form-group">
							<label>{input.label}</label>
							<input id = {input.label} type={input.html_element} className="form-control"/>
							</div>
							)
					})
				}

				</div>
				)
			})}

					<button type = "{onSubmit}" className="btn btn-primary"> Submit </button>
			</form>
		</div>
		)
}