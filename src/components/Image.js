import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <div class="fluid card">
                <div class="image">
                    <img alt="" src={this.props.pic} />
                </div>
            </div>
        )
    }
}
