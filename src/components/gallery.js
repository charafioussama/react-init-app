import React, { Component } from 'react'
import axios from 'axios';
import HitItem from './hitItem';
import SearchHitForm from './searchHitForm';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            currentPage: 1,
            pageSize: 10,
            currentKeyword: '',
            totalPages: 1,
            pages: []
        }
    }

    getHits(keyword) {
        let url = "https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q="
            + keyword + "&page" + this.state.currentPage + "&per_page=" + this.state.pageSize;
        axios.get(url).then((resp) => {
            let totalPages = Math.round(resp.data.totalHits / this.state.pageSize);
            this.setState({
                hits: resp.data.hits,
                totalPages,
                pages: new Array(totalPages).fill(0)
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    componentDidMount() {
        //this.getHits(); 
    }

    goToPage = (page) => {
        this.setState({
            currentPage: page
        }, () => this.getHits(this.state.currentKeyword));
    }

    search = (keyword) => {
        this.getHits(keyword);
    }

    render() {
        return (
            <div>
                <div>
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((v, i) =>
                                <li key={i}>
                                    <button className={this.state.currentPage == i + 1 ? 'btn btn-primary' : 'btn-link'} onClick={() => this.goToPage(i + 1)}>{i + 1}</button>
                                </li>
                            )
                        }

                    </ul>
                </div>
                <SearchHitForm onSearch={this.search} />
                <div className="row">
                    {
                        this.state.hits.map((hit, i) =>
                            <HitItem key={i} hit={hit} />
                        )
                    }
                </div>
            </div>
        )
    }
}
