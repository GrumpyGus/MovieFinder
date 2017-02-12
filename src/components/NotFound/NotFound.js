import React, { Component } from 'react';
import '../../stylesheets/components/_not_found.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>
          404 <small>Not Found</small>
        </h1>
      </div>
    );
  }
}
