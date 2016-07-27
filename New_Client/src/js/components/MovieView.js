var React=require('react');
var ReactDOM=require('react-dom');
var MovieUpdate=require('./MovieUpdate');
var MovieView=React.createClass(
  {
    getInitialState:function()
   {
     return {nameUp:'',
   showModal : false};

   },
   handleShowModal: function(){
     console.log("show");
     this.setState({showModal : true})
   },
   handleHideModal : function(){
     console.log("hide false");
     this.setState({showModal : false})
   },
    DeleteFromDB:function(e)
    {
      e.preventDefault();
     $.ajax({
        url:'http://localhost:8080/movieapp/'+this.props.MovAll._id,
        type:'DELETE',
        datatype:'JSON',
        success:function(data)
        {
          console.log("Deleted Record");
        }.bind(this),
        error:function(error)
        {
          console.log(error);
        }.bind(this)
      });
    },
    render:function()
    {
      return(
        <div>
      <div className="row">
				<div className="col-md-6">
					<img alt="" src={this.props.MovAll.Poster}/>
				</div>
				<div className="col-md-6">
        <form>
					<h3 className="text">{this.props.MovAll.Title}</h3>
          <p>Year Released : {this.props.MovAll.Year}</p>
          <p>IMDB-ID : {this.props.MovAll.imdbID}</p>
          <button className="btn btn-info" onClick={this.DeleteFromDB}><b>Delete</b></button>
          <a id="modal-808820" href="#modal-container-808820" onMouseDown={this.handleShowModal}
          role="button" className="btn btn-info" data-toggle="modal">Update</a>
           {this.state.showModal?<MovieUpdate handleHideModal={this.handleHideModal} MovAll={this.props.MovAll} />:null}
          </form>
          </div>
      </div>
    </div>
    );
  }
});
module.exports = MovieView;
