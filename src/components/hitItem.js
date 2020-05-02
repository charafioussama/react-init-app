import React, { Component } from 'react'

export default class HitItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">{this.props.hit.tags} | {this.props.hit.webformatWidth} x {this.props.hit.webformatHeight}</div>
                    <div className="card-body">
                        <img className="card-img" height={200} src={this.props.hit.webformatURL} />
                    </div>
                </div>
            </div>
        )
    }
}
