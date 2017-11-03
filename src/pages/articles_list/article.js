import React, {Component} from 'react';
import {
    Links
} from 'react-router-dom';
import './article.scss'
import axios from 'axios'
import A_ListItem from '../../components/Articles/List/listItem'
class Articles extends Component {
    constructor() {
        super();
        this.state = {
            articles_data: []
        }

    }

    componentDidMount() {
        axios.get("https://api.github.com/repositories/69333276/issues", {
                headers: {
                    'Accept': 'application/vnd.github.v3.html',
                }
            }
            ,).then(res => {
            this.setState({
                articles_data: res.data
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="page page-article">
                    <div className="article-list">
                        <div className="article-items">
                            {this.state.articles_data.length > 0 ?
                                this.state.articles_data.map(item => (
                                    <A_ListItem data={item} key={item.id}/>
                                )) : '' }
                        </div>

                    </div>
                    <div className="article-aside">
                    </div>

                </div>
            </div>
        )
    }
}

export default Articles
