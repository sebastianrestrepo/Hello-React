import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
    handleClick = (event) => {
        console.log(this.props.title);
    }
    render(){
        return(
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
<img
className="Media-image" 
src="./images/covers/bitcoin.jpg"
alt=""
width={260}
height={160}
/>
<h3 className="Media-title">{this.props.title}</h3>
<p className="Media-author">Leonidas Esteban</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
image: PropTypes.string,
title: PropTypes.string,
author: PropTypes.string,
}

export default Media;