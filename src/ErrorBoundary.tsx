import React, { Component, ErrorInfo, ReactNode } from 'react';
import Header from './common/components/Header';
import Footer from './common/components/Footer';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  error: null | Error;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <>
          <Header />
          <h1>An error has occurred in a child component:</h1>
          {error.message && <p>{error.message}</p>}
          <Footer />
        </>
      );
    }

    return children;
  }
}


export default ErrorBoundary;
