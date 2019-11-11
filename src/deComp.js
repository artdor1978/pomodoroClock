class Stringify extends React.Component {
  render() {
    return (
      <div>
        <span id={this.props.id}>{this.props.children}</span>
      </div>
    );
  }
}

<div>
  <Stringify id="break-label">Break Length</Stringify>
  <Stringify id="session-label">Session Length</Stringify>
  <Stringify id="timer-label">Session</Stringify>
</div>;
