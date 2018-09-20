var WelcomeMessage= React.createClass({
    render:function(){
        var city= this.props.city;
        var state= this.props.state;
        return(
            <div>
                <h1>my city is {city} </h1>
                <h1>my state is {state} </h1>
            </div>
        )
    }
});

var WelcomeForm= React.createClass({
    onFormSubmit:function(e){
        e.preventDefault();
        var updates={};
        var city= this.refs.city.value;
        var state= this.refs.state.value;
        if(city.length > 0){
            this.refs.city.value= '';
            updates.city=city;
        }
        if(state.length > 0){
            this.refs.state.value= '';
            updates.state=state;
        }
        this.props.collectData(updates)

    },
    render:function(){
        return(
            <form onSubmit= {this.onFormSubmit}>
                <div>
                    Enter your city : <input type="text" ref="city" placeholder="Enter city" />
                    </div>
                <div>    
                    Enter your state : <input type="text" ref="state" placeholder="Enter state" />
                </div>
                <div>
                    <button>submit</button>
                </div>
            </form>


        )
    }
});

var WelcomeMain= React.createClass({
    getDefaultProps: function(){
        return{
            city: 'agra',
            state: 'DELHI'
        }
    },
    getInitialState: function(){
        return{
            city:this.props.city,
            state:this.props.state
        }
    },
    changeState:function(updates){
        this.setState(updates)

    },
    render:function(){
        var city= this.state.city
        var state= this.state.state
        return(
            <div>
                <WelcomeMessage city={city} state={state} />
                <WelcomeForm collectData={this.changeState} />
            </div>
        )
    }
})

ReactDOM.render(
    <WelcomeMain city="madras" />,
    document.getElementById('app')
)