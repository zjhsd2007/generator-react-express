var React = require('react'),
	Router = require('react-router');

var Header = React.createClass({
	render: function() {
		return (
			<div className="page-header">
				<h1><%= projectName %></h1>
			</div>
		);
	}
});

var PageNav = React.createClass({
	render: function() {
		return (
			<div className="nav">
				<Router.Link to="home">Home</Router.Link>
				&nbsp; | &nbsp;
				<Router.Link to="about">About</Router.Link>
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="container">
				<Header />
				<PageNav />
				<this.props.activeRouteHandler/>
			</div>
		);
	}
});

var routes = {
	Home: require('../routes/Home'),
	About: require('../routes/About')
};

var routes = (
	<Router.Routes location="history">
		<Router.Route name="app" path="/" handler={App}>
			<Router.Route name="home" path="/" handler={routes.Home}/>
			<Router.Route name="about" path="/about" handler={routes.About}/>
			<Router.DefaultRoute handler={routes.Home}/>
		</Router.Route>
	</Router.Routes>
);

React.renderComponent(routes, document.body);
