
import "babel-polyfill"; 

import React, { Component, PropTypes } from 'react'  
import ReactDOM from "react-dom";
import ToDo from './ToDo' ;

	

	class List  extends React.Component {

	deleteItem(index){
		 
		 this.props.items.splice(index, 1);
		 this.setState({items: this.props.items});	
					}


	handleItemClick (index){		
		this.setState({items: this.props.items[index]});			
		this.props.items[index].checked= !this.props.items[index].checked;		 
	    return false;
	  }

	getKey(){
			return ( Math.random()* (99 - 1) + 1);
			}	

	checkboxStyle(checked){
						return{
							textDecoration: checked? "line-through":"none"
						}			
					}

				render() {
										
					const ul = this.props.items.map((item, index) =>{
																		
						 return (
						 	<li key={this.getKey()} className={item.value} >				 
						 	<div className="item-text">
			                  <span style={this.checkboxStyle(item.checked)}>{item.value}</span>	                
						 		<input type="checkbox" className="checkbox" onChange={this.handleItemClick.bind(this,index)} checked={item.checked}/>
						 		<label htmlFor="checkbox"></label>
						 		<button className = 'del fa fa-times' onClick={this.deleteItem.bind(this,index)}></button>
						 	</div>
							</li>
							);
						 });

					return (
						<div className="list-bg">
							<ul id='list'>
								{ul}	
							 </ul>
					 </div>	
					);
				
			} 
		}

	export default List;