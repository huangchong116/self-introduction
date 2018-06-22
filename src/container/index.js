import React,{Component} from "react";
import 'components/less/index.less';
import {Carousel} from "antd";

class Index extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="home">
				<h1>一个神奇的标题</h1>
				<Carousel autoplay>
					<div><h3>1</h3></div>
				    <div><h3>2</h3></div>
				    <div><h3>3</h3></div>
				    <div><h3>4</h3></div>
				</Carousel>
			</div>
		)
	}
}
export default Index;
