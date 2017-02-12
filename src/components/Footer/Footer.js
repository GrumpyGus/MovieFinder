import React, { Component } from 'react';
import '../../stylesheets/components/_footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </div>
    );
  }
}
