var MyComponent = React.createClass({
    getDefaultProps: function(){
        return{
            city: 'bombay'
        }
    },
    getInitialState: function(){
        return{
            city:this.props.city
        }
    },
    callme:function(e){
        e.preventDefault();
        var city= this.refs.city.value;
        this.setState({
            city:city
        })
    },
    render:function(){
        var mycity= this.state.city;
        var mystate= this.props.state;
        return(
            <div>
                <h1>welcome to {mycity} and the state is {mystate}</h1>
                <p>this is my first welcome component</p>
            <form onSubmit={this.callme}>
                <input type="text" ref="city"/>
                <button>click me</button>
                
            </form>    
            </div>
        )
    }
});


ReactDOM.render(
    <MyComponent city="pune" state="MAH"/>,
    document.getElementById('app')
);