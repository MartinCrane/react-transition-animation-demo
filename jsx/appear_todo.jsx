var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var React = require('react');

var AppearTodoList = React.createClass({
  getInitialState: function() {
    return {items: ['these', 'words', 'transition', 'in', 'when', 'mounted']};
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item}>
          {item}
        </div>
      )
    });

    return (
      <div>
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}
          transitionAppearTimeout={1500}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});


module.exports = AppearTodoList;
