/**
 * Created by leliu5 on 2016/12/27.
 */
/**
 * Created by leliu5 on 2016/12/8.
 */
import React from 'react';
import data from '../data/text.json'
import ReactMarkdown from  'react-markdown'
import imgSrc from '../images/pic1.png'
import '../styles/articlelist.css'
import $ from  'jquery'
import MovieCell from './moviecell'
import '../styles/articlelist.css'
import { CONFIG } from '../constant/Config.js';
export default class MovieList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            movie:[],
            show:false
        };
        this.handleClick=this.handleClick.bind(this);
        this.backList=this.backList.bind(this);
    }
    componentDidMount(){
        console.log(this.state.movie.length);
        if (this.state.movie.length==0) {
            console.log("我发了请求");
            var that = this;
            $.ajax({
                url: "https://api.douban.com/v2/movie/in_theaters",
                // url: "https://api.douban.com/v2/movie/search?q=长城",

                // data:{
                //     // access_token :CONFIG.access_token,
                // },
                // url: "https://api.github.com/repos/liule1988/liule.github.io/issues",
                type: 'GET',
                dataType: 'JSONP',//here
                success: function (data) {
                    console.log(JSON.stringify(data))
                    that.setState({
                        movie: data.subjects,
                        show: true
                    })
                }
            });
        }else {
            console.log("不发")
        }
    }


    handleClick(){

        this.setState({
            show:true
        });
    }
    backList(){
        this.setState({
            show:true
        });
    }

    render() {

        return (
            <div className="art_list_box" >

                <div className="art_nav_tag" onClick={this.handleClick} >
                    正在热映
                </div>
                {this.state.show?<MovieCell data={ this.state.movie}/>:<div><img src={require('../images/loading.gif')}/>Loading...</div>}
            </div>

        )
    }
}

const styles={

};
