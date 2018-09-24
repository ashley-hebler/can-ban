import React from 'react';
import ga from 'react-ga';
let dev = process.env.NODE_ENV !== 'production';
dev = false;

if (!dev) ga.initialize('UA-119991646-1');

export default Component =>
  class WithAnalytics extends React.Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      this.trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;
      if (currentPage !== nextPage) this.trackPage(nextPage);
    }

    trackPage = page => {
      if (!dev) {
        ga.pageview(page);
      }
    };

    render() {
      return <Component {...this.props} />;
    }
  };

export const trackEvent = (category, action, label, value) =>
  !dev && ga.event({ category, action, label, value });
