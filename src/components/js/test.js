import React,{Component} from "react";
import { Parallax } from 'react-spring'
import './style.less'

const Page = ({ offset, caption, first, second, gradient, onClick, mes }) => (
    <React.Fragment>
        <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
            <div className="slopeBegin" />
        </Parallax.Layer>

        <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
            <div className={`slopeEnd ${gradient}`} />
        </Parallax.Layer>

        <Parallax.Layer className="text number" offset={offset} speed={0.3}>
            <span></span>
        </Parallax.Layer>

        <Parallax.Layer className="text header" offset={offset} speed={0.4}>
            <span>
                <p style={{ fontSize: 20 }}>{caption}</p>
                <div className={`stripe ${gradient}`} />
            </span>
        </Parallax.Layer>
    </React.Fragment>
)

class Test extends Component {
    scroll = (to) => this.refs.parallax.scrollTo(to);
    render() {
        return (
            <Parallax className="container" ref="parallax" pages={3} horizontal scrolling={false}>
                <Page offset={0} gradient="pink" caption="who am i" first="Lorem ipsum" second="dolor sit" onClick={() => this.scroll(1)} />
                <Page offset={1} gradient="teal" caption="what we do" first="consectetur" second="adipiscing elit" onClick={() => this.scroll(2)} />
                <Page offset={2} gradient="tomato" caption="what we want" first="Morbi quis" second="est dignissim" onClick={() => this.scroll(0)} />
            </Parallax>
        )
    }
}
export default Test;