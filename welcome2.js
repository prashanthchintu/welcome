var MyComponent = React.createClass({
    render:function(){
        return(
            <div>
                <h1>welcome to React Component</h1>
                <p>this is my first welcome component</p>
            </div>
        )
    }
});


ReactDOM.render(
    <MyComponent/>,
    document.getElementById('app')
);