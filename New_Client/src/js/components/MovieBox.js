var React=require('react');
var MovieForm=require('./MovieForm');
var MovieList=require('./MovieList');

var MovieBox=React.createClass({
  getInitialState:function()
  {
    return {data:[]};
  },
  submitTitleInfo:function(mov)
  {
    console.log(mov.Title);
    $.ajax({
      url:'http://www.omdbapi.com/?s='+mov.Title,
      data:'GET',
      datatype:"JSON",
      success:function(data)
      {
        this.setState({data:data.Search});
        console.log(data);
      }.bind(this),
      error:function(error)
      {
        console.log(error);
      }.bind(this)
    });
  },
  render : function(){
  return(

      <div className="first">
      <h3>My Movie Box</h3>
      <MovieForm handleSubmit={this.submitTitleInfo}/>
      <MovieList data={this.state.data}/>
      </div>
  );
  }
});
module.exports=MovieBox;
