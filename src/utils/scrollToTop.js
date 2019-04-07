import { Component } from 'react';
import { withRouter } from "react-router";


// Utility class to scroll to top of page upon redirect.
// (Ref: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md)
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
