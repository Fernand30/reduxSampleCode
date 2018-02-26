import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Counter from '../components/Counter.js';

const mapStateToProps = state => ({
  count: state
})

const mapDispatchToProps = (dispatch) => ({
  increment: (num) => { 
    dispatch({ num: num, type: 'INCREMENT' }) 
  },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
  add: () => { dispatch({ type: 'ADD' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)