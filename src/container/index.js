import React,{Component} from "react";
import 'components/less/index.less';
import {Link} from "react-router-dom";

class Index extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="home">
				<h1><Link to="/test">一个神奇的标题</Link></h1>
				<svg width="700" height="350">
					<g>
						<path className="test1" d="M0 0 V350 H700 V0 Z" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="2" stroke="#000000" fill="none"></path>
						<path className="test2" d="M0 0 L350 175 L700 0" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="1" stroke="#000000" fill="none"></path>
						<path className="test1" d="" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="2" stroke="#000000" fill="none"></path>
					</g>
				</svg>
			</div>
		)
	}
}
export default Index;
