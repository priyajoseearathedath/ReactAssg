var React=require('react');
var Movie=require('./Movie');
var MovieList=React.createClass(
  {

    render:function()
    {
      console.log(this.props.data);
      var MovieNodes=this.props.data.map(function(movie){
        return(<Movie movie1={movie} key={movie.imdbID}/>);
      }.bind(this));
      return (
        <div>
        {MovieNodes}
        </div>
      );
    }
});
module.exports=MovieList;
