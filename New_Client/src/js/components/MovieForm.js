var React=require('react');
var MovieForm=React.createClass(
  {
    getInitialState:function()
    {
      return {Title:''};
    },
    handleTitleChange:function(e)
    {
      this.setState({Title:e.target.value});
        //console.log(e.target.value));
    },
    submitTitle:function(e)
    {
      e.preventDefault();//stops the other functions
      this.props.handleSubmit({Title:this.state.Title});
    },
    render:function()
    {
      return (
      <div className="search-form">
      <form onSubmit={this.submitTitle}>
      <input type="text" name="Title" value={this.state.Title} onChange={this.handleTitleChange} className="form-control" placeholder="search here" id="searchInput"/>
      <button type="submit">SEARCH</button>
      </form>
      </div>
    );
    }
});
module.exports=MovieForm;
