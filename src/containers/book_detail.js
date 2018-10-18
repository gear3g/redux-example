import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{


    render() {
        var result;

        if (!this.props.book) {
            result = (
                <div>Select a book to get started.</div>
            );
        } else {
            result = (
                <div>
                    <h3>Details for:</h3>
                    <div>Title: {this.props.book.title}</div>
                    <div>Pages: {this.props.book.pages}</div>
                </div>
            );
        }


        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);