var MyComponent = React.createClass({
    getDefaultProps: function(){
        return{
            city: 'bombay'
        }
    },
    render:function(){
        var mycity= this.props.city;
        var mystate= this.props.state;
        return(
            <div>
                <h1>welcome to {mycity} and the state is {mystate}</h1>
                <p>this is my first welcome component</p>
            </div>
        )
    }
});


ReactDOM.render(
    <MyComponent state="MAH"/>,
    document.getElementById('app')
);