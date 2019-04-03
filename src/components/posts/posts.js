import React, { Component } from "react";
import Post from "../post/index"

var      posts = [{
    user: {
        nickname: "arjoo",
        avatar: "http://www.tekkne.com.mx/images/monster.png"
    },
    image: "http://personal.psu.edu/xqz5228/jpg.jpg",
    caption: "so funny"
}, {
    user: {
        nickname: "arjoo",
        avatar: "http://www.tekkne.com.mx/images/monster.png"
    },
    image: "http://personal.psu.edu/xqz5228/jpg.jpg",
    caption: "so funny"
},
{
    user: {
        nickname: "arjoo",
        avatar: "http://www.tekkne.com.mx/images/monster.png"
    },
    image: "http://personal.psu.edu/xqz5228/jpg.jpg",
    caption: "so funny"
}]

class Posts extends Component {

    constructor(props){
        super(props)
      }
    render() {
        return (
            <div className="Posts">
                {
                    posts.map(
                        post => <Post name={post.user.nickname} icon={post.user.avatar} image={post.image} caption={post.caption} key={post.id} />
                    )
                }
            </div>
        )

    }


}

export default Posts