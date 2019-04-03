import React, { Component } from "react";
import './post.css'
    class Post extends Component {
      constructor(props){
        super(props)
      }
      render() {
        return <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src={this.props.icon} alt={this.props.name} />
                </div>
                <div className="Post-user-nickname">
                  <span>{this.props.name}</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Icon Living" src={this.props.image} />
              </div>
            </div>
            <div className="Post-caption">
              <strong>{this.props.name}</strong> {this.props.caption}
            </div>
          </article>;
        }
    }
    export default Post;