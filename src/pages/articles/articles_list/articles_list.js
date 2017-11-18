/**
 * Created by liule on 2017/11/6.
 */
import React, {Component} from 'react';
import {
    Link, Route
} from 'react-router-dom';
import './articles_list.scss'
import axios from 'axios'
import A_ListItem from '../../../components/Articles/List/listItem'
import {action_articles_data} from '../../../redux/action/article'
import {connect} from 'react-redux'

class ArticlesList extends Component {
    constructor() {
        super();
        this.state = {
            hotTags: [],
            hot_articles: [],
            articles_data: [],
            cato_slider_H: 0,
            category: [{
                name: "全部博文",
                key: 'all',
            }, {
                name: "前端技术",
                key: '技术',
            }, {
                name: "心情随笔",
                key: '随笔',
            }, {
                name: "影视漫谈",
                key: '影评',
            }]
        }

    }

    componentDidMount() {
        this.getArticles("all");
        this.getHotTags();
    }

    getArticles = (key) => {
        let url = "https://api.github.com/repositories/69333276/issues";
        let params = '';
        if (key !== 'all') {
            params = {labels: key, state: 'open'}
        }
        axios.get(url, {
                params: params,
                headers: {
                    'Accept': 'application/vnd.github.v3.html',
                }
            }
            ,).then(res => {

            let hot = JSON.parse(JSON.stringify(res.data));
            if (key == 'all') {
                let hot_sort_articles = hot.sort((x, y) => {
                    return y.comments - x.comments
                })
                this.setState({
                    hot_articles: hot_sort_articles,
                    articles_data:JSON.parse(JSON.stringify(res.data))
                });
            } else {
                this.setState({
                    articles_data: JSON.parse(JSON.stringify(res.data))
                });
            }
        })
    }

    getHotTags = () => {

        let url = "https://api.github.com/repositories/69333276/issues";
        let
            params = {state: 'closed'}

        axios.get(url, {
                params: params,
                headers: {
                    'Accept': 'application/vnd.github.v3.html',
                }
            }
            ,).then(res => {
            this.setState({
                hotTags: res.data[0].labels
            });
        })
    }
    moveCatoSlider = (index) => {
        this.setState({
            cato_slider_H: 40 * index
        })
    }
    searchByCategory = (key) => {
        this.getArticles(key)
    }

    render() {
        const HotTags = (props) => (
            <div className="article-list-aside-item">
                <div className="blog-aside-pane">
                    <h4 className="pane-head">热门标签</h4>
                    <div className="pane-body hot-tags">
                        {this.state.hotTags.map((item, index) => (
                            <a style={{color: '#' + item.color}} key={index + item}
                               onClick={this.getArticles.bind(this, item.name)}>{item.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        )
        const HotArticles = (props) => (
            <div className="article-list-aside-item">
                <div className="blog-aside-pane">
                    <h4 className="pane-head">热门文章</h4>
                    <div className="pane-body">
                        <ul className="hot-list">

                            {this.state.hot_articles.map((item, index) => (
                                <li key={index + item.title}>
                                    <Link to={'/articles/detail/' + item.number}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
        return (
            <div className="container">
                <div className="page page-article">
                    <div className="article-list">
                        <div className="article-items">
                            {this.state.articles_data.length > 0 ?
                                this.state.articles_data.map(item => (
                                    <A_ListItem data={item} key={item.id}/>
                                )) :
                                <div>暂无相应文章</div>
                            }
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
                                    {this.state.category.map((item, index) => (
                                        <li key={index + item.key} className="blog-category-item"
                                            onMouseOver={this.moveCatoSlider.bind(this, index)}>
                                            <a onClick={this.searchByCategory.bind(this, item.key)}>{item.name}</a>
                                        </li>
                                    ))}
                                    <li>
                            <span className="category-slider"
                                  style={{top: this.state.cato_slider_H + 'px'}}>
                            </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {this.state.hotTags && <HotTags/>}
                        {this.state.hot_articles && <HotArticles/>}
                    </div>

                </div>
            </div>


        )
    }
}

const
    mapStateToProps = (state) => {
        return {
            articles: state.articles
        }
    }
const
    mapDispatchToProps = (dispatch) => {
        return {
            onChangeArticles: (data) => {
                dispatch(action_articles_data(data))
            }
        }
    }

export default connect(mapStateToProps,
    mapDispatchToProps)(ArticlesList)
;


