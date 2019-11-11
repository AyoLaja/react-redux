import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo192.png'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        console.log(this.props)
        const { posts } = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Logo} alt="Logo"/>
                        <div className="card-content">
                            <Link to={`/${post.id}`}>
                                <span className="card-title green-text">{post.title}</span>
                            </Link> 
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                <p>No posts yet</p>
            </div>
        )

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

//connect returns hightr order component that wraps Home component and gives it more functionalities
export default connect(mapStateToProps)(Home)