var MyComponent = React.createClass({
    getDefaultProps: function(){
        return{
            city: 'bombay'
        }
    },
    callme:function(e){
        e.preventDefault();
        var user= this.refs.myname.value;
        alert(user);
    },
    render:function(){
        var mycity= this.props.city;
        var mystate= this.props.state;
        return(
            <div>
                <h1>welcome to {mycity} and the state is {mystate}</h1>
                <p>this is my first welcome component</p>
            <form onSubmit={this.callme}>
                <input type="text" ref="myname"/>
                <button>click me</button>
                
            </form>    
            </div>
        )
    }
});


ReactDOM.render(
    <MyComponent state="MAH"/>,
    document.getElementById('app')
);