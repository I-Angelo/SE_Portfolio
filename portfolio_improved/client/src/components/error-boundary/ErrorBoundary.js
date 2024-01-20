import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.error('Error caught by error boundary:', error, info);

    // Update state to indicate that an error occurred
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error message or component here
      return <div>Something went wrong. Please try again later.</div>;
    }

    // If no error occurred, render the child components
    return this.props.children;
  }
}

export default ErrorBoundary;

// ErrorBoundary.js