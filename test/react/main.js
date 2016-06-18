var Timer=React.createClass({
	render:function(){
		var elapsed=this.props.elapsed/100;//1/10s
		var seconds=elapsed/10+(elapsed%10?(elapsed/10):'.0');
		var msg='currentTime:'+seconds+'s';
		return <p>msg<p>;
	}
});
var startDate=new Date();

setInterval(function(){
	ReactDom.render(
		<Timer elapsed={new Date().getTime()-startDate.getTime()} />,
		document.getElementById('container');
		)
})








