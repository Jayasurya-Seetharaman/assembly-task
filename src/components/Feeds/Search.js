import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

    state = {
        text: ''
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter title to search', 'light');
        } else {
            this.props.searchFeeds(this.state.text);
            this.setState({ text: '' });
        }
    }

    static propTypes = {
        searchFeeds: PropTypes.func.isRequired
    }

    changeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { showClear, clearFeeds } = this.props;
        return (
            <div>
                <form onSubmit={this.submitHandler} className="form" >
                    <input
                        type="text"
                        name="text"
                        placeholder="Search feeds.."
                        value={this.state.text}
                        onChange={this.changeHandler} />
                    <input
                        type="submit"
                        className="btn btn-dark btn-block"
                        value="Search" />
                    {showClear && (<button type="button" className="btn btn-block"
                        onClick={clearFeeds}>Clear</button>)}
                </form>
            </div>
        )
    }
}

export default Search;