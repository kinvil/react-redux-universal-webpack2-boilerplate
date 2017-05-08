import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUser } from '../actions/github'
import Profile from '../components/Profile'

class Home extends Component {
    constructor() {
        super()
        this.getUserProfile = this.getUserProfile.bind(this)
        this.state = {
            name: null
        }
    }

    getUserProfile() {
        const name = this.refs.username.value
        this.props.getUser(name)
        this.setState({ name })
    }

    render() {
        const { users } = this.props
        return (
            <div>
                <span>github user name : </span>
                <input ref="username" />
                <button onClick={this.getUserProfile}>send</button>
                <Profile data={users.profile[this.state.name]} />
            </div>
        )
    }
}

Home.propTypes = {
    users: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    users: state.users
})

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
