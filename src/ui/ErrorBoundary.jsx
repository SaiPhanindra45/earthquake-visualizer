import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen w-full items-center justify-center bg-red-100">
          <h1 className="text-2xl font-bold text-red-700">
            Something went wrong. Please refresh.
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;