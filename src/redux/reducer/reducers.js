const initState = {
    articles: [],  //文章列表
};

export default function (state = initState, action)  {
    switch (action.type) {
        case "ARTICLE_DATA":
            return {
                ...state,
                animateCls: action.articles
            }
        default:
            return state
    }
}


