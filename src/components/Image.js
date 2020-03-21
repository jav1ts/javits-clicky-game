import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        const {id,handleClick, pic} = this.props;
        return (
            <div  onClick={handleClick} id={id} className="fluid card">
                <div className="image">
                    <img className="ui mini image" alt="" src={pic} />
                </div>
            </div>
        )
    }
}
