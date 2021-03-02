import React, { Component } from 'react';
import './ImageCard.scss';

class ImageCard extends Component {
    constructor(props){
        super(props);
        this.myref = React.createRef();

        this.state= {
            p_x:"0px",
            class : "none"
        }
    }

    componentDidMount(){
        var node = this.myref.current; 
        node.addEventListener("load",this.set_p_x);
        node.addEventListener("mouseover",this.set_class);
        node.addEventListener("mouseout",this.unset_class)
    }
    
    set_p_x = () => {
        var p_x = this.myref.current.width <= 200 ? "50px": "0px";
        this.setState({p_x:p_x})
    }

    set_class = () => {
        // console.log("on");
        this.setState({class:"attack"})
    }

    unset_class = () => {
        // console.log("off");
        this.setState({class:"none"})
    }

    render() {
        const i= this.props.i;
        return (
            <img 
        className={this.state.class}    
        style={{paddingLeft:`${this.state.p_x}`,paddingRight:`${this.state.p_x}`,opacity:`${this.state.opacity}`}}    
        ref={this.myref}    
        alt={i.alt_description}  
        src={i.urls.small}
        >
        </img>
        );
    }
}

export default ImageCard;




