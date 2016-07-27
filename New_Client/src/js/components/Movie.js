var React=require('react');
var Movie=React.createClass(
  {
    addToDB: function(e)
    {
      e.preventDefault();
      $.ajax({
        url:'http://localhost:8080/movieapp',
        type:'POST',
        datatype:"JSON",
        data:this.props.movie1,
        success:function(data)
        {
          console.log("inserted");
        }.bind(this),
        error:function(error)
        {
          console.log(error);
        }.bind(this)
      });
    },
    render:function()
    {
      return (
        <div>
        <h3>Movie Details</h3>
          <div className="row">
            <div className="col-md-6"><img src={this.props.movie1.Poster} alt=""/></div>
            <div className="col-md-6">
            <h4>Title:{this.props.movie1.Title}</h4>
            <h4>Year:{this.props.movie1.Year}</h4>
            </div>
            <button type="submit" onClick={this.addToDB}>ADD </button>
          </div>
          </div>
            );
    }
});

module.exports=Movie;
