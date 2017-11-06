import React, {Component} from 'react';
import {
    Links, Route,
    Switch
} from 'react-router-dom';
import './articles_list/articles_list.scss'
import A_List from './articles_list/articles_list'
import A_Detail from './articles_detail/articles_detail'
import {action_articles_data} from '../../redux/action/article'
import {connect} from 'react-redux'

class Articles extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <Switch>
                <Route exact path="/articles" component={A_List}/>

                < Route
                    path="/articles/detail/:id"
                    component={A_Detail}/>
            </Switch>
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

export
default

connect(mapStateToProps,
    mapDispatchToProps)

(
    Articles
)
;


