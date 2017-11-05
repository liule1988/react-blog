import React, {Component} from 'react';
import {
    Links, Route
} from 'react-router-dom';
import './article.scss'
import axios from 'axios'
import A_ListItem from '../../components/Articles/List/listItem'
import A_Detail from '../articles_detail/articles_detail'
import {action_articles_data} from '../../redux/action/article'
import {connect} from 'react-redux'

class Articles extends Component {
    constructor() {
        super();
        this.state = {
            articles_data: [],
            cato_slider_H:0
        }

    }

    componentDidMount() {
        axios.get("https://api.github.com/repositories/69333276/issues", {
                params: {},
                headers: {
                    'Accept': 'application/vnd.github.v3.html',
                }
            }
            ,).then(res => {
            this.setState({
                articles_data: res.data
            });
            this.props.onChangeArticles(res.data)
        })
    }

    render() {
        return (
            <div>
                <Route exact path="/articles" render={
                    (props) => (
                        <div className="container">

                            <div className="page page-article">
                                <div className="article-list">
                                    <div className="article-items">
                                        {this.state.articles_data.length > 0 &&
                                        this.state.articles_data.map(item => (
                                            <A_ListItem data={item} key={item.id}/>
                                        ))  }

                                    </div>

                                </div>
                                <div className="article-aside le-clearfix">
                                    <div className="article-list-aside-item">
                                        <div className="blog-search">
                                            <form className="blog-search-form">

                                                <label className="form-body">
                                                    <input placeholder="搜索一下"/>
                                                </label>
                                            </form>
                                        </div>
                                        <div className="blog-category">
                                            <ul>
                                                <li className="blog-category-item">
                                                    <a href="#">全部博文</a>
                                                </li>
                                                <li className="blog-category-item">
                                                    <a href="#">技术博客</a>
                                                </li>
                                                <li className="blog-category-item">
                                                    <a href="#">随笔</a>
                                                </li>
                                                <li className="blog-category-item">
                                                    <a href="#">影视漫谈</a>
                                                </li>
                                                <li>
                                                    <li className="category-slider" style={{top:this.state.cato_slider_H+'px'}}>

                                                    </li>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }/>

                < Route
                    path="/articles/detail/:id"
                    component={A_Detail}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeArticles: (data) => {
            dispatch(action_articles_data(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles);


