"use strict";

let About = React.createClass ({
  render() {
    return (
      <div>
        <div>
          <h1>Hello I'm here</h1>
          <p> Check this out </p>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<About />, document.getElementById('page'));