var React=require('react');
var MovieListView=require('./MovieListView');
var MovieBoxView = React.createClass({
 getInitialState:function()
 {
   return {data:[]};
 },
componentWillMount: function(){
$.ajax({
  url:'http://localhost:8080/movieapp',
  type:"GET",
  datatype:"json",
  success:function(data)
  {
  this.setState({data:data});
  }.bind(this),
  error:function(err){
    console.log(error);
  }.bind(this)
});
},
 render: function() {
   return (
     <div>
      <MovieListView data={this.state.data} />
     </div>
   );
 }
});
module.exports=MovieBoxView;
