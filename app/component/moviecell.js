/**
 * Created by leliu5 on 2016/12/27.
 */
/**
 * Created by Administrator on 2016/12/14 0014.
 */
import React from 'react';
import ReactMarkdown from  'react-markdown'
import Article from './article'
import '../styles/movie.css';
import {Link} from 'react-router';

export default class MovieCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showArticle: false,
            content: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(kk) {
        this.setState({
            showArticle: true,
            content: kk
        });

    }


    render() {
        var items = this.props.data;
        console.log(items[1].directors[0]);

        return (
            <div>
                { this.state.showArticle ? <Article data={this.state.content}/> :
                    items.map((item, index)=>(

                        <div className="movieWraper" key={index} onClick={(prams)=>this.handleClick(item)}>
                            <div className="movie_poster">
                                <img className="movie_img" src={item.images.medium}/>
                                <span className="directors">
                                {item.directors[0].name}
                            </span>
                            </div>

                            <div className="movie_info">
                                <span className="movie_title">{item.title}</span>
                                <span className="movie_rating">{item.rating.average}</span>

                            </div>


                        </div>
                    ))


                }
            </div>

        )
    }
}
